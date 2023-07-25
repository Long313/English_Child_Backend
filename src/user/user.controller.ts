import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/user/infor')
  getInfor() {
    return 'user infor';
  }

  @Post('/user')
  createAccount() {
    return 'create account';
  }

  @Put('/user/:id')
  changeInfor() {
    return 'update infor';
  }
}
