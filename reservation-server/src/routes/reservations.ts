import express from 'express';
import Reservation from '../models/Reservation';
import {sendEmail} from "../utils/sendEmail";
import {getReservationConfirmationHtml} from "../assets/emailTemplate";

const router = express.Router();



router.post('/', async (req, res) => {
    try{
        const {firstName, lastName, phone,email,service,note,date,time} = req.body;
        console.log('req body', req.body);
        const reservation = new Reservation({
            firstName,
            lastName,
            phone,
            email,
            service,
            note,
            date,
            time

        })
        const messageHtml = getReservationConfirmationHtml(firstName, lastName, date, time, service,note);
        await reservation.save();
        await sendEmail(email, `Potvrdenie rezervacie na ${service}`, messageHtml);
        await sendEmail("martin.lapsa2@gmail.com", "Nová rezervácia", `${firstName} ${lastName} sa rezervoval na ${date} o ${time}`)
        res.status(200).json({message:"Rezervacia vytvorena"});
    }
    catch (error) {
        console.error("Chyba pri POST /api/reservations:", error);
        res.status(500).json({message:"Chyba pri tvorbe rezervacie"});
    }
})

export default router;