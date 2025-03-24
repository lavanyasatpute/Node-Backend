import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("product_2008")
export class Products{
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    product_name:string

    @Column({nullable:true})
    brand:string

    @Column({nullable:true})
    category:string

    @Column({nullable:true})
    price:number

    @Column({nullable:true})
    rating:number

}