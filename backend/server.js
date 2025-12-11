require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",      
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (origin.includes("vercel.app")) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.log("CORS blocked origin:", origin);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};


app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("Wearify Mailer API is running");
});

app.post("/send", async (req, res) => {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Wearify" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Dziękujemy za zapis!",
      text: `Cześć ${name || ""}! Twój kod rabatowy: RABAT25`,
      html: `<p>Cześć <strong>${name || ""}</strong>!</p><p>Twój kod rabatowy: <strong>RABAT25</strong></p>`
    });

    res.json({ success: true, message: "Mail sent!" });
  } catch (err) {
    console.error("Mailer error:", err);
    res.status(500).json({
      success: false,
      message: "Mail failed to send",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mailer running on port ${PORT}`);
});
