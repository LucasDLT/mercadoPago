import { Payment } from "mercadopago";
import mercadopago from "../config/mercadopago";
import { MercadoPagoItem } from "../types";

export const createPayment = async (
    PaymentMethodId:string,
     token:string,
      email:string, 
      items:MercadoPagoItem[]
    )=>{
    const body = {
        transaction_amount: items.reduce((acc, item)=> acc + item.unit_price * item.quantity, 0),
        token,
        description: items[0].title,
        installments: 1,
        payment_method_id: PaymentMethodId,
        payer:{
            email,
        },
        metadata:{
        },
    };
    try {
        const paymentClient = new Payment(mercadopago)
        const response = await paymentClient.create({body})
        return response
    } catch (error:any) {
        console.error("Error al crear el pago:", error)
        throw new Error(error.message)
    }
}