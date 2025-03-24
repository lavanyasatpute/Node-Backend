import { AppDataSource } from "../config/data-source";
import { Products } from "../entities/product";

export const productRepo = AppDataSource.getRepository(Products);