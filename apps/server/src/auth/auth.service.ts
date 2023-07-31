import { Inject, Injectable } from '@nestjs/common';
import AuthModel from './auth.model';
import { PrismaClientInitializationError } from '@prisma/client/runtime';
import { AuthBodyDto } from './dto/auth.body.dto';

@Injectable()
export class AuthService {
  constructor(@Inject(AuthModel) private authModel: AuthModel) {}

  //WITH STATIC STATUS DATA :
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


  // TO CREATE STATUS DYNAMICALLY : 
  /*public async authUserCred({ username, password, status }: AuthBodyDto) {
    try {
      if (!username || !password)
        throw new Error('Username or password is missing');
      const auth = await this.authModel.checkUser({
        username: username,
        password: password,
        status: status,
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
}*/
