import { IsString } from 'class-validator';

export class RegBodyDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  /*   @IsString()
  readonly mobile: number;

  @IsString()
  readonly role: number;

  @IsString()
  readonly status: string;*/
}



