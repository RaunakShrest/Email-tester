const nodeMailer = require('nodemailer');

const sendEmail = async () => {
    console.log("Preparing to send email");

    const transporter = nodeMailer.createTransport({
        host: 'mail.nepalbank.com.np',
        port: 587,
        secure: false, // secure should be false for port 587
        auth: {
            user: 'no-reply@nepalbank.com.np',
            pass: 'Nb!$1994',
        },
        authMethod: 'LOGIN',
    });

    const mailOptions = {
        from: 'no-reply@nepalbank.com.np',
        to: 'raunakshrestha62@gmail.com',
        subject: 'Nepal Bank',
        html: 'hello world',
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    } finally {
        console.log("Email sending process completed");
    }
};

module.exports = sendEmail;
