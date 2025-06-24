import express from "express";
import cors from 'cors'
import dotenv from "dotenv";
import reservationRoutes from './routes/reservations'
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/reservations", reservationRoutes)

mongoose.connect(process.env.MONGODB_URI !).then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
})
.catch(error => console.error("Chyba MongoDB Error: ", error));

app.get("/", (req, res) => {
    res.send("Server is running ✅");
});