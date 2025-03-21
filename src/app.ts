import { AppDataSource } from "./config/data-source";
import OrderRouter from "./routes/order.route";
import ProductRouter from "./routes/product.route";
// import CourseRouter from "./routes/course.route";
// import StudentRouter from "./routes/student.route";
import {userRouter} from './routes/user.routes';
import express from 'express';
import 'reflect-metadata'
require('dotenv').config()

const app = express();

AppDataSource.initialize()
.then(() => console.log("Database Connected Successfully...!"))
.catch((error) => console.log(error))


app.use(express.json())
app.use('/order',OrderRouter)
app.use('/product',ProductRouter)
app.use('/user', userRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started...!");
})


