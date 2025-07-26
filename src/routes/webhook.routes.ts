// src/routes/webhook.routes.ts
import { webhookController } from "../controllers/webhook.controller";
import router from "./router";

router.post("/webhook", webhookController);

export default router;
