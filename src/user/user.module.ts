// user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Registrar o model User
  ],
  providers: [UserService],
  controllers: [UserController], 
  exports: [UserService],  // Se precisar exportar para outros módulos
})
export class UserModule {}