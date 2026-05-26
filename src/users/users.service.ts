import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  greetUser() {
    const a = 100;
    console.log(a);
    console.log(a + a + a);
    return 'Hello, world!';
  }
}
