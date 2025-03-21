import { AppDataSource } from "../config/data-source";
import { OrderItem } from "../entities/orderitem";


export const studentRepo = AppDataSource.getRepository(OrderItem);