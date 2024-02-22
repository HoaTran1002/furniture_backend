import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  register() {
    this.authService.work();
    return 'register success';
  }
  @Post('login')
  login() {
    this.authService.work();
    return 'login success';
  }
}
