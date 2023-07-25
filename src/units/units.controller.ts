import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('units')
export class UnitsController {
  @Get('/getUnit')
  getUnits() {
    return 'list';
  }
  @Post('/createUnit')
  createUnits() {
    return 'new unit';
  }
  @Put('/editUnit')
  editUnit() {
    return 'edit unit';
  }
}
