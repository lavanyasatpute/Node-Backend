import { Products } from "../entities/product";
import { productRepo } from "../repositories/product.repository";

export class ProductService {
    async addProduct(name: string, brand: string, category: string, price: number, rating: number) {
        await productRepo.createQueryBuilder()
            .insert()
            .into(Products)
            .values({
                product_name: name,
                brand: brand,
                category: category,
                price: price,
                rating: rating
            }).execute();
        return `${name} add successefully..`
    }

    async deleteProduct(id: number) {
        const productname = await productRepo.find({ where: { id: id } })
        await productRepo.delete(id)

        return `${productname} deleted successfully..`
    }

    async DisplayProduct(column: string) {
        const productname = await productRepo
            .createQueryBuilder("product")
            .select(`product.${column}`)
            .getMany();
        return productname;
    }

    async DisplayParticularProduct(column: string, filterValue: string) {
        const productname = await productRepo
            .createQueryBuilder("product")
            .select(["product.product_name", `product.${column}`])
            .where(`product.${column} = :filterValue`, { filterValue })
            .getMany();
        return productname;
    }
    
    
}

export { }






























