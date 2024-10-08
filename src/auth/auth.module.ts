import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "src/schemas/user.schema";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]) ], // Registrar o model User],
})

export class AuthModule { }