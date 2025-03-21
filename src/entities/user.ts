import { Collection, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";
import { Profile } from "./profile";

@Entity("Assignment_User")
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    U_name:string

    @Column()
    email:string

    @OneToMany(()=>Order,(order)=>order.user_Id)
    order:Order


    @OneToOne(()=>Profile,(profile)=>profile.user)
    @JoinTable({name:"Profile_Id"})
    profile:Profile

}