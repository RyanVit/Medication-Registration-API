import { BadGatewayException, BadRequestException, Injectable } from "@nestjs/common";
import { ZodSchema } from "zod";

@Injectable()
export class ZodValidationPipe {
    constructor(private readonly schema:ZodSchema<any>) {}

    async transform(value: any) {
        try {
            return await this.schema.parse(value);
        } catch (error) {
            console.log(error);
            const message = error.errors[0].message;
            throw new BadRequestException({ message});

        }
    }
}   

