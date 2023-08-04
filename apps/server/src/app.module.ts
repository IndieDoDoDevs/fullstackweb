import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './datasource/prisma/prisma.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [AuthModule, PrismaModule, RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
