// src/controllers/webhook.controller.ts
import { Request, Response } from "express";
import { handlePaymentNotification } from "../services/webhook.service";

export const webhookController = (req: Request, res: Response) => {
  try {
    const notification = req.body;

    const result = handlePaymentNotification(notification);

    res.status(200).json({ message: "Webhook recibido", result });
  } catch (error) {
    console.error("Error en el webhook:", error);
    res.status(500).json({ error: "Error procesando webhook" });
  }
};
