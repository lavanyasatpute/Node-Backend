import { ProductController } from "../controllers/product.controller";
const productController = new ProductController()
const express = require('express');

const ProductRouter = express.Router();
ProductRouter.post('/add', productController.AddProduct)
// CourseRouter.get('/delete', courseController.deleteController);


export = ProductRouter;