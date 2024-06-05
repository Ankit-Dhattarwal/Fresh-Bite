import mongoose, { connect } from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ankitdhattarwal:5Onwa6woBFZs59wo@fresh-bite.ocbbkw6.mongodb.net/?retryWrites=true&w=majority&appName=fresh-bite"
    )
    .then(() => {
      console.log("You are connected to database.");
    });
};
