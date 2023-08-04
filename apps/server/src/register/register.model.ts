import { Inject, Injectable } from "@nestjs/common/decorators";
import { PrismaService } from "src/datasource/prisma/prisma.service";
import { RegBodyDto } from "./dto/register.body.dto";

@Injectable()
export default class RegisterModel{
    constructor(@Inject(PrismaService) private prisma : PrismaService){}

    public async registerUser(body : RegBodyDto){
      return await this.prisma.user.create({
        data: {
            email : body.email,
            username : body.username,
            password : body.password,
        },
        select:{
             id: true,
             
        },
      })
    }
}