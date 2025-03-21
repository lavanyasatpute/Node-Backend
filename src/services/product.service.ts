import { productRepo } from "../repositories/product.repository";

export class ProductService{
    async addProduct(name:string, price:number){
        const CourseRepo = productRepo.create({
            product_name:name,
            price:price
        })
        productRepo.save(CourseRepo);
        return `${name} add successefully..`
    }

    async deleteProduct(id:number){
        const productname = await productRepo.find({where:{id:id}})
        await productRepo.delete(id)
        
        return `${productname} deleted successfully..`
    }
    
}

export {}






























