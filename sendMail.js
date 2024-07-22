// const nodemailer = require("nodemailer");
// const path = require('path');
// require("dotenv").config();
// console.log("USER:", process.env.USER);
// console.log("APP_PASSWORD:", process.env.APP_PASSWORD);

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.USER,
//         pass: process.env.APP_PASSWORD,
//     }
// });

// const mailOptions = {
//     from: {
//         name: "Raunak",
//         address: process.env.USER,
//     },
//     to: "raunakshrestha62@gmail.com",
//     subject: "Hello PalmMind",
//     text: "Hello",
//     html: "<b>Hello namaste bank</b>",
// };

// const sendMail = async (transporter, mailOptions) => {
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log("Email has been sent successfully.");
//     } catch (error) {
//         console.error(error);
//     }
// }

// sendMail(transporter, mailOptions);
