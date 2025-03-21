import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

const productService = new ProductService();

export class ProductController {
    async AddProduct(req: Request, res: Response): Promise<Response> {
        try {
            const { name, price } = req.body;
            if (!name || !price) {
                return res.status(400).json({
                    message: "Invalid input. Please provide name and price."
                });
            }

            const result = await productService.addProduct(name, price);

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
}
