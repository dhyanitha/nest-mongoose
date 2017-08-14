import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    components: [UserService],
    controllers: [UserController],
    modules: []
})
export class UserModule { }