import { Controller, Get, Post, Body } from '@nestjs/common';
import { TournamentService } from './tournament.service';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly appService: TournamentService) { }

  @Get()
  findAll() {
    return this.appService.findAll();
  }
  @Post()
  create(@Body() body: unknown) {
    return this.appService.create(body);
  }
}
