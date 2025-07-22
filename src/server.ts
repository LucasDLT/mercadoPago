import app from "./app";
import { PORT } from "./env";

app.listen(PORT, ()=>{
    console.log('Servidor escuchando en el puerto: ', PORT)
})