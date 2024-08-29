import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt"; // Importação corrigida para compatibilidade com TypeScript
import { Model } from "mongoose";
import { User } from "../schemas/user.schema";

@Injectable()
export class AuthService implements OnModuleInit {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async onModuleInit() {
        const user = await this.userModel.findOne({ email: 'admin@email.com' });
        if (!user) {
            const hashedPassword = await bcrypt.hash('admin', 10);
            await this.userModel.create({
                name: 'admin',
                email: 'admin@email.com',
                password: hashedPassword,
            });
        }
    }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            return null;
        }
        
        return user;
    }

}
