import router from "./router";
import { handleCreatePayment } from "../controllers";

//logica a definir usando bricks y webhooks
router.post("/create-payment", handleCreatePayment)


export default router