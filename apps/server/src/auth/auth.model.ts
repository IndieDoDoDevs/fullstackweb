import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/datasource/prisma/prisma.service';
import { AuthBodyDto } from './dto/auth.body.dto';

@Injectable()
export default class AuthModel {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}
  public async checkUser({ username, password }: AuthBodyDto) {
    return await this.prisma.user.findFirst({
      where: {
        username,
        password,
      },
      select: {
        id: true,
      },
    });
  }
}
