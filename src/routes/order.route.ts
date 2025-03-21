import { OrderController } from "../controllers/order.controller";
const orderController = new OrderController()
const express = require('express');

const OrderRouter = express.Router();
OrderRouter.post('/add', orderController.addOrder)
// CourseRouter.get('/delete', orderController.deleteController);


export = OrderRouter;
