import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthBodyDto } from './dto/auth.body.dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private authService: AuthService) {}

 /* @Post('register')
  public async register(@Body() body: AuthBodyDto) {
    return await this.authService.authUserReg(body);
  }*/

  @Post('login')
  public async login(@Body() body: AuthBodyDto) {
    return await this.authService.authUserCred(body);
  }
}
