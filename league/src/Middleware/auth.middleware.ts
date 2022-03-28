// import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
// import { HttpException } from '@nestjs/common/exceptions/http.exception';
// import { JwtService } from '@nestjs/jwt';
// import { NextFunction, Request, Response } from 'express';
// import { UserEntity } from 'src/user/entities/user.entity';
// import { UserService } from 'src/user/user.service';

import { Injectable, NestMiddleware } from '@nestjs/common';

// declare global {
//   namespace Express {
//     interface Request {
//       user?: Partial<UserEntity>;
//     }
//   }
// }

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    throw new Error('Method not implemented.');
  }
  //   constructor(
  //     private readonly jwtService: JwtService,
  //     private readonly userService: UserService,
  //   ) {}
  //   async use(req: Request, _res: Response, next: NextFunction) {
  //     const authHeaders = req.headers.authorization;
  //     let decoded: any;
  //     if (authHeaders && (authHeaders as string).split(' ')[1]) {
  //       const token: string = (authHeaders as string).split(' ')[1];
  //       try {
  //         decoded = this.jwtService.verify(token, {
  //           secret: `${process.env.JWT_KEY}`,
  //         });
  //       } catch (error) {
  //         throw new HttpException('Not Authorized', HttpStatus.UNAUTHORIZED);
  //       }
  //       const user: UserEntity = await this.userService.findByEmail(
  //         decoded.email,
  //       );
  //       if (!user) {
  //         throw new HttpException('Not Authorized', HttpStatus.UNAUTHORIZED);
  //       }
  //       req.user = user;
  //       next();
  //     } else {
  //       throw new HttpException('Not Authorized', HttpStatus.UNAUTHORIZED);
  //     }
  //   }
}
