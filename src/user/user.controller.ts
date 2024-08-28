// src/user/user.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
   
  ): Promise<User> {
    return this.userService.createUser(name, email);
  }

  @Get( )
  async getUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}