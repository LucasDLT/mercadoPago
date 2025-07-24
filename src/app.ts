import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/payment.routes"

const app = express()

app.use(cors( {
    origin: "http://localhost:3000",
}

))
app.use(express.json())
app.use("/api", paymentRoutes)

export default app