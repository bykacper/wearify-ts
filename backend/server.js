require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require('resend')

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

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("Wearify Mailer API is running with Resend");
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
    const result = await resend.emails.send({
      from: "Wearify <noreply@wearify.dev>", 
      to: email,
      subject: "Dziękujemy za zapis!",
      html: `
        <p>Cześć <strong>${name || ""}</strong>!</p>
        <p>Twój kod rabatowy: <strong>RABAT25</strong></p>
      `,
    });

    console.log("Email sent:", result?.id);

    res.json({ success: true, id: result?.id });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mailer (Resend) running on port ${PORT}`);
});
