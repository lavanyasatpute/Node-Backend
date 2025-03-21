import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";
import { Products } from "./product";

@Entity("OrderItem_tbl_2008")
export class OrderItem{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToMany(()=>Order,(order)=>order.orderItem)
    @JoinTable()
    order:Order[]

    @ManyToMany(()=>Products,(product)=>product.orderitem)
    @JoinTable()
    product:Products[]
}