import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="color: red; text-align: center">Hello, from Game</h1>';
  }
}
