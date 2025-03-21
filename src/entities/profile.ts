import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity("Profil_tbl_2008")
export class Profile{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    bio:string

    @OneToOne(()=>User,(user)=>user.profile)
    user:User
}