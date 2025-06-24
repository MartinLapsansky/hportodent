import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    service: String,
    note: String,
    date: String,
    time: String,
})

export default mongoose.model('Reservation', reservationSchema);