import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import AuthModel from './auth.model';

@Module({
  providers: [AuthService, AuthModel],
  controllers: [AuthController],
})
export class AuthModule {}
