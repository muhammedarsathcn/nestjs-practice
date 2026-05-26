import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  greetUser() {
    const a = 10;
    console.log(a);
    console.log(a +a);
    return 'Hello, world!';
  }
}
