import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DesiredTripDuration, Vocation } from './app.model';

@ApiTags('Trip Dates Possibilities')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Consulta datas',
  })
  @Get()
  getHello(): any[] {
    /**
     * Aqui estamos chamando a funções com valores fixos para a realização da validação
     */
    return this.appService.getHello(
      Vocation.Create('2024-06-01', '2024-06-30'),
      DesiredTripDuration.Create(5, 10),
    );
  }
}
