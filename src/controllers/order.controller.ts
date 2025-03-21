import { OrderService } from "../services/order.service";
import { Request, Response } from "express";

const orderService = new OrderService();

export class OrderController{
    async addOrder(req:Request,res:Response){
        const {user_Id, order_Date} = req.body;
        const result = await orderService.addOrder(user_Id,order_Date,"pending");
        res.json(result);
        // result.then((mes)=>res.status(200).json(mes));
        
        // console.log("------------------");
        
    }
}