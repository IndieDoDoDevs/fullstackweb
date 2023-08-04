import { Body, Controller,Inject, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegBodyDto } from './dto/register.body.dto';

@Controller('v1')
export class RegisterController {
    constructor(@Inject(RegisterService) private service: RegisterService){}
    
    @Post('register')
    public async register_const(@Body() body :RegBodyDto ){
        return await this.service.register_service(body);
    } 
}


