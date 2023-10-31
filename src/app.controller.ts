import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Trip Dates Possibilities')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Consulta datas',
  })
  @Get()
  getHello(): any[] {
    return this.appService.getHello();
  }
}
