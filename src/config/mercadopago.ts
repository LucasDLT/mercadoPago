import  {TEST_MERCADOPAGO_ACCESS_TOKEN}  from "../env";
import {MercadoPagoConfig} from "mercadopago"

const mercadopago = new MercadoPagoConfig({
    accessToken: TEST_MERCADOPAGO_ACCESS_TOKEN || "",
});

export default mercadopago