import { AppDataSource } from "./config/data-source";
import ProductRouter from "./routes/product.route";
import express from 'express';
import 'reflect-metadata'

require('dotenv').config()

const app = express();

AppDataSource.initialize()
.then(() => console.log("Database Connected Successfully...!"))
.catch((error:any) => console.log(error))


app.use(express.json())
app.use('/product',ProductRouter)


app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started...!",`http://localhost:${process.env.SERVER_PORT}`);
})


