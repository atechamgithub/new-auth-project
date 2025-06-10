import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectdb } from "./db/connectdb.js";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.route.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const _dirname = path.resolve();

app.use(cors({origin: "http://localhost:5173", credentials: true}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(_dirname, "/frontend/dist")));
    
    app.get("* ", (req, res) => {
        res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
    });
}
    
app.listen(PORT, () => {
    connectdb();
    console.log("Server is running on port: ", PORT);
});




