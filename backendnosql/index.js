import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { ObjectId } from "mongodb";

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

// DELETE /wishlist/:id
app.delete("/wishlist/:id", async (req, res) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    const result = await db.collection("wishlist").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Item not found" });
    }

    console.log(`Wishlist item deleted: ${id}`);
    res.json({ message: "Item deleted successfully", id });
  } catch (err) {
    console.error("MongoDB error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get("/countries", async (req, res) => {
    try {
      const countries = await db.collection("countries").find().toArray();
      // Return only the country codes as strings
      const codes = countries.map((c) => c.code);
      res.json(codes);
    } catch (err) {
      console.error("MongoDB error:", err.message);
      res.status(500).json({ error: err.message });
    }
  });
  
  // POST a new country
  app.post("/countries", async (req, res) => {
    const code = (req.body.code || "").trim().toUpperCase();
    if (!code) return res.status(400).json({ error: "Country code is required" });
  
    try {
      // Check if country already exists
      const exists = await db.collection("countries").findOne({ code });
      if (exists) return res.status(409).json({ error: "Country already exists" });
  
      const result = await db.collection("countries").insertOne({ code });
      console.log("Country added:", code);
      res.status(201).json({ message: "Country added", code });
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


