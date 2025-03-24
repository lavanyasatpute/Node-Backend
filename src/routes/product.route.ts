import { ProductController } from "../controllers/product.controller";
const productController = new ProductController()
const express = require('express');

const ProductRouter = express.Router();
ProductRouter.post('/add', productController.AddProduct)
ProductRouter.get('/delete/:id', productController.DeleteProduct);
ProductRouter.get('/display/:column', productController.DisplayProduct);
ProductRouter.get('/filter/:column/:value',productController.DisplayPerticulerProduct)


export = ProductRouter;