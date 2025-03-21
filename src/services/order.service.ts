import { userRepo } from "../repositories/user.repository";
import { orderRepo } from "../repositories/order.repository";

export class OrderService {
    async addOrder(user_Id: number, order_Date: string, status: string): Promise<string> {
        const user = await userRepo.findOne({
            where: { id: user_Id }
        });
        if (!user) {
            throw new Error(`User with ID ${user_Id} does not exist.`);
        }

        // Step 2: Create the order and associate it with the user
        const order = orderRepo.create({
            user_Id: user, // Associate the user entity
            oderDate: order_Date, // Corrected typo (orderDate instead of oderDate)
            status: status
        });

        // Step 3: Save the order to the database
        await orderRepo.save(order);

        return `Order added successfully!`;
    }
}
