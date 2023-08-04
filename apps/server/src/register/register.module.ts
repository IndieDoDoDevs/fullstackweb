import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';
import RegisterModel from './register.model';


@Module({
  controllers: [RegisterController],
  providers: [RegisterService, RegisterModel]
})
export class RegisterModule {}
