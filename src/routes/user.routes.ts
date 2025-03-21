const express = require("express");
import { UserController } from "../controllers/user.controller";


const router = express.Router();
const userController = new UserController();

router.post('/add', userController.createUser);

export{router as userRouter }


