import { Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  @Post('register')
  async register() {
    return 'register';
  }

  @Post('login')
  async login() {
    return 'login';
  }
}
