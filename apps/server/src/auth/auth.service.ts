import { Inject, Injectable } from '@nestjs/common';
import AuthModel from './auth.model';

@Injectable()
export class AuthService {
  constructor(@Inject(AuthModel) private authModel: AuthModel) {}
}
