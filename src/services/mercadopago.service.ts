import { Payment } from "mercadopago";
import mercadopago from "../config/mercadopago";
import { MercadoPagoItem } from "../types";

export const createPayment = async (
    PaymentMethodId:string,
     token:string,
      email:string, 
      items:MercadoPagoItem[],
      description:string,
      installments:number
    )=>{
    const body = {
        transaction_amount: items.reduce((acc, item)=> acc + item.unit_price * item.quantity, 0),
        token,
        description,
        installments,
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