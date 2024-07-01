import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// mongodb+srv://ankitdhattarwal:5Onwa6woBFZs59wo@fresh-bite.ocbbkw6.mongodb.net/?retryWrites=true&w=majority&appName=fresh-bite

// app-config
const app = express();

const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

// db-connection
connectDb();

/// Api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
