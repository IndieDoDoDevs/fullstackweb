import { IsString } from 'class-validator';

export class AuthBodyDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
