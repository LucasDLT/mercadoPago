import {Request, Response} from "express";
import { createPayment } from "../services/mercadopago.service";

export const handleCreatePayment = async (req: Request, res: Response) => {
    const {token, PaymentMethodId, email, items} = req.body;
    try {
        const payment = await createPayment(PaymentMethodId, token, email, items)
        res.status(200).json({payment});
    } catch (error) {
        res.status(500).json({message: "Error al procesar el pago", error})
    }
}