require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (origin.includes("vercel.app")) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);

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
  res.send("Wearify Mailer API is running (Resend v2)");
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
    const sender = "Wearify <kgoluchowski112@gmail.com>";

    const result = await resend.emails.send({
      from: sender,
      to: email,
      subject: "Dziękujemy za zapis!",
      html: `
        <p>Cześć <strong>${name || ""}</strong>!</p>
        <p>Twój kod rabatowy to: <strong>RABAT25</strong></p>
      `,
    });

    console.log("Resend sent:", result);

    res.json({
      success: true,
      message: "Mail processed by Resend.",
    });

  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Mailer running on port ${PORT}`);
});
