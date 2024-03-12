import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  getUser(): string {
    return `this first user nest`;
  }
}
