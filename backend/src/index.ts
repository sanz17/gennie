import app from "./app"
import { connectDatabase } from "./db/connection";

const PORT=process.env.POR || 5000;
connectDatabase().then(() =>{
    app.listen(PORT,() => console.log("Server Open")); 
})
 
app.listen(5000,()=> console.log("Server is live")); 