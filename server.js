import { connectDb } from "./data/database.js";
import {app} from "./app.js"

connectDb();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on ${process.env.PORT} `);
})