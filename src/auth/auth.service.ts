import { Injectable } from '@nestjs/common';
@Injectable({})
export class AuthService {
  register() {
    console.log('register success');
  }
  login() {
    console.log('login success');
  }
}
