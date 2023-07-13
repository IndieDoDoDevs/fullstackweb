import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthBodyDto } from './dto/auth.body.dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  @Post('register')
  async register() {
    return 'register';
  }

  @Post('login')
  public async login(@Body() body: AuthBodyDto) {
    return await this.authService.authUserCred(body);
  }
}
