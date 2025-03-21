// import { Post } from "../entities/post";
import { profileRepository } from "../repositories/profile.repository";
import { userRepo } from "../repositories/user.repository";

export class UserService{
    async createUser(U_name: string, email: string, bio: string){
        const profile = profileRepository.create({bio});
        const user = userRepo.create({U_name, email, profile});
        return await userRepo.save(user)
    }
    
    async deleteUser(id: number){
        return await userRepo.delete(id)
    }

    // async createUser(firstName: string, lastName: string, posts: Post []): Promise<User>{
    //     const profile = profileRepository.create({bio});
    //     const user = userRepository.create({firstName, lastName, posts});
    //     return userRepository.save(user)
    // }
}