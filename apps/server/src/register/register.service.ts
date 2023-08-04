import { Injectable, Inject } from '@nestjs/common';
import  RegisterModel  from './register.model';
import { RegBodyDto } from './dto/register.body.dto';
import { validate } from 'class-validator';
import { PrismaClientInitializationError } from '@prisma/client/runtime/library';
import  * as bcrypt from 'bcryptjs';

@Injectable()
export class RegisterService {
  constructor(@Inject(RegisterModel) private model: RegisterModel) {}

  public async register_service(body: RegBodyDto) {
    try {
      const errors = await validate(body);

     // console.log([{constraints:"email must be a string"},{constraints:"Phone must be num"}].map((errors) =>Object.values(errors.constraints)));

      //not neccessary
      /*if (errors.length > 0) {
        // Extract error messages and return them
        const errorMessages = errors.map((error) => Object.values(error));
        return {
          error: 'Validation failed',
          messages: errorMessages,
        };
      }*/

      

      // Check for empty email, username, and password
      if (!body.email || !body.username || !body.password) {
        throw new Error('Missing Credentials');
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(body.password, saltRounds);

      // Store the hashed password in the database
      const registeredUser = await this.model.registerUser({ ...body, password: hashedPassword });
      //const registeredUser = await this.model.registerUser(body);
      return {
        message: 'User registered successfully',
        data: registeredUser,
      };

    } catch (error) {
      console.log({ error });

      // Handle any unexpected errors
      if (error instanceof PrismaClientInitializationError) {
        return {
          error: 'Server not avaliable',
        };
      }
      return { error: 'Not Avaliable' };
    }
  }
}
