import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json()); // <-- required to parse JSON

// Global logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} body:`, req.body);
  next();
});

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI);
let db;
async function connectDB() {
  try {
    await client.connect();
    db = client.db(); // use DB from URI
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
}
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// POST /users
app.post("/wishlist", async (req, res) => {
  try {
    const result = await db.collection("wishlist").insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error("MongoDB error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// GET /users
app.get("/wishlist", async (req, res) => {
  try {
    const wishlist = await db.collection("wishlist").find().toArray();
    res.json(wishlist);
  } catch (err) {
    console.error("MongoDB error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Bind to IPv4
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
