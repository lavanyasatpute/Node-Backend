import { UserService } from "../services/user.service"
import { Request, Response } from "express";

const userService = new UserService();

export class UserController{
    createUser = async(req: Request, res: Response) =>{
        console.log("--------------------------------")
        const {name, email, bio} = req.body;
        const user = await userService.createUser(name, email, bio);
        res.status(201).json(user);
    }

    deleteUser = async(req: Request, res: Response) => {
        await userService.deleteUser(Number(req.params.id));
        res.status(201).json({ message: "User deleted...!"});
    }
}