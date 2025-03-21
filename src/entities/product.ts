import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";
import { OrderItem } from "./orderitem";

@Entity("product_2008")
export class Products{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    product_name:string

    @Column()
    price:number

    @ManyToMany(()=>OrderItem,(order)=>order.product)
    orderitem:OrderItem[]

}