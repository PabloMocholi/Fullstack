import { misDatos } from "../db/db.js";

const data = misDatos;

export const getAllInfo = (req, res) => {
    try {

        res.status(200).send(data);

    } catch (error) {
        res.status(500).send("Error al conseguir los datos")
    }


}

export const getEmails = (req, res) => {
    try {

        res.status(200).send(data.emails);

    } catch (error) {
        res.status(500).send("Error al conseguir los emails")
    }

}