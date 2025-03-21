import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../entities/user'
import { Products } from "./product";
import { OrderItem } from "./orderitem";

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id:number

    @ManyToOne(()=>User,(user)=>user.order)
    @JoinColumn({name:"user_Id"})
    user_Id:User

    @Column()
    oderDate:string

    @Column()
    status:string

    @ManyToMany(()=>OrderItem,(orderitem)=>orderitem.order)
    orderItem:OrderItem[]

}