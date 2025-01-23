
import { transporter } from "./Email.confiq.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, Verification_Email_Template, Welcome_Email_Template, } from "./EmailTemplate.js";


export const sendVerificationEmail = async(email,verificationCode)=>{
    try {
     const response =   await transporter.sendMail({
            from: '"Adarsh" <adsrivastav203@gmail.com>',

            to: email, // list of receivers
            subject: "Verify your Email", // Subject line
            text: "Verify your Email", // plain text body
            html: Verification_Email_Template.replace("{verificationCode}",verificationCode)
        })
        console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error',error)
    }
}
export const sendWelcomeEmail=async(email,name)=>{
    try {
     const response =   await transporter.sendMail({
            from: '"Adarsh" <adsrivastav203@gmail.com>',

            to: email, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: Welcome_Email_Template.replace("{name}",name)
        })
        console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error',error)
    }
};

export  const sendResetSuccessEmail = async(email ,sendResetSuccessEmail )=>{
       try{
        const response = await transporter.sendMail({
           from: '"Adarsh "  <adsrivastav203@gmail.com>',

           to: email,
           subject: "Password Reset Successfully",
           text: "ResetMail",
           html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{sendResetSuccessEmail}",sendResetSuccessEmail )
        })
            console.log('send ResetSuccesssEmail',response);
          } catch (error) {
            console.error('Error sending email:', error);
          }
        };

        export const sendPasswordResetEmail = async (email , sendPasswordResetEmail)=>{

    try {
        const response = await transporter.sendMail({
            from: '"Adarsh" <adsrivastav203@gmail.com>', // Replace with your email
            to: email, // Recipient email
            subject: "Password Reset Request", // Subject line
            text: `You requested a password reset. Click the link below to reset your password: ${resetLink}`, // Plain text body
            html:  PASSWORD_RESET_REQUEST_TEMPLATE.replace("{sendPasswordResetEmail }", sendPasswordResetEmail )
                
        });
        console.log("Password reset email sent successfully", response);
    } catch (error) {
        console.error("Error sending password reset email:", error.message);
    }
};
        
        

