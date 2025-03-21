import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user";

export const userRepo = AppDataSource.getRepository(User)