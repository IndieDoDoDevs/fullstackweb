import { Inject, Injectable } from '@nestjs/common';
import AuthModel from './auth.model';
import { PrismaClientInitializationError } from '@prisma/client/runtime';
import { AuthBodyDto } from './dto/auth.body.dto';

@Injectable()
export class AuthService {
  constructor(@Inject(AuthModel) private authModel: AuthModel) {}

  public async authUserCred({ username, password }: AuthBodyDto) {
    try {
      if (!username || !password)
        throw new Error('Username or password is missing');
      const auth = await this.authModel.checkUser({
        username: username,
        password: password,
      });
      if (!auth) {
        return {
          message: 'No user Found, if error presist create a new user',
        };
      }

      if (auth) {
        return {
          message: 'User Found',
          data: auth,
        };
      }
    } catch (error) {
      console.log({ error });

      if (error instanceof PrismaClientInitializationError) {
        return {
          error: 'Server not avaliable',
        };
      }
      return { error: 'Not Avaliable' };
    }
  }
}
