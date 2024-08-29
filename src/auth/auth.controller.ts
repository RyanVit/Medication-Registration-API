
import { BadRequestException, Body, Controller, NotFoundException, Post } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { AuthService } from "./auth.service";
import { ZodValidationPipe } from "./pipes/zodValidation.pipe";
import { createUserSchema } from "./zodSchemas/createUser.schemas";

@Controller("auth")
export class AuthController {
    constructor( private readonly authService: AuthService) {}


    @Post()
    async login(@Body(new ZodValidationPipe(createUserSchema)) body: any) {
        const { email, password } = body;
        const user = await this.authService.validateUser(email, password);

        if (!user) {
            throw new NotFoundException({message:"User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new BadRequestException({message:"Invalid email or password"});

        } 
        return user

    }
}

