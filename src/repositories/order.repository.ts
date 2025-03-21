import { AppDataSource } from "../config/data-source";
import { Order } from "../entities/order";


export const orderRepo = AppDataSource.getRepository(Order);