import { misDatos } from "../db/db.js";

const data = misDatos;

export const getAllInfo = (req, res) => {
   
    res.status(200).send(data);
}

export const getEmails = (req, res) => {
   
    res.status(200).send(data.emails);
}