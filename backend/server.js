require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({
  origin: "https://wearify-ts.vercel.app",
  methods: "GET,POST",
  allowedHeaders: "Content-Type"
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  try {
    await transporter.sendMail({
      from: `"Wearify" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Dziękujemy za zapis!",
      text: "Twój kod rabatowy: RABAT25"
    });

    res.json({ success: true, message: "Mail sent!" });
  } catch (err) {
    console.error("Mailer error:", err);
    res.status(500).json({ success: false, message: "Mail failed to send" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Mailer running on port ${process.env.PORT}`);
});
