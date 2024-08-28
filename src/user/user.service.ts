import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // Exemplo de método de serviço
  async createUser(name: string, email: string): Promise<User> {
    const newUser = new this.userModel({ name, email });
    return await newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  // Outros métodos de serviço...
}