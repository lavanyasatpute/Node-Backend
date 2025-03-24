import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

const productService = new ProductService();

export class ProductController {
  
    async AddProduct(req: Request, res: Response): Promise<Response> {
        try {
            const { name,brand,category, price,rating} = req.body;
            if (!name || !price) {
                return res.status(400).json({
                    message: "Invalid input. Please provide name and price."
                });
            }

            const result = await productService.addProduct(name,brand,category, price,rating);

            return res.status(201).json({
                message: "Product added successfully!",
                data: result
            });
        } catch (error:any) {
            console.error("Error adding product:", error);

            return res.status(500).json({
                message: "An error occurred while adding the product.",
                error: error.message
            });
        }
    }

    async DeleteProduct(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({
                    message: "Invalid input. Please provide valid id."
                });
            }

            const result = await productService.deleteProduct(Number(id));

            return res.status(201).json({
                message: "Product delete successfully!",
                data: result
            });
        } catch (error:any) {
            console.error("Error delete product:", error);

            return res.status(500).json({
                message: "An error occurred while deleting the product.",
                error: error.message
            });
        }
    }

    async DisplayProduct(req: Request, res: Response): Promise<Response> {
        try {
            const column = req.params.column
            const result = await productService.DisplayProduct(column);
            return res.status(201).json({
                message: "Product display successfully!",
                data: result
            });
        } catch (error:any) {
            console.error("Error display product:", error);

            return res.status(500).json({
                message: "An error occurred while displaying the product.",
                error: error.message
            });
        }
    }

    async DisplayPerticulerProduct(req: Request, res: Response): Promise<Response> {
        try {
            const { column, value } = req.params;
            const result = await productService.DisplayParticularProduct(column,value);
            return res.status(201).json({
                message: "Product display successfully!",
                data: result
            });
        } catch (error:any) {
            console.error("Error display product:", error);

            return res.status(500).json({
                message: "An error occurred while displaying the product.",
                error: error.message
            });
        }
    }
}
