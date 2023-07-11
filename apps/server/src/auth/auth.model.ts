import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from 'src/datasource/prisma/prisma.service';

@Injectable()
export default class AuthModel {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}
  public async checkUser({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) {
    return await this.prisma.user.findUnique({
      where: {
        // TODO: @NiroshKumarR I wrote the schema for user table wrong, so I have to use email as username and cant use password
        email: username,
      },
    });
  }
}
