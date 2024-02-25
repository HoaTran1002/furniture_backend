import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  register() {
    this.authService.register();
    return 'register success';
  }
  @Post('login')
  login() {
    this.authService.login();
    return 'login success';
  }
}
