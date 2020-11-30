import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  findAll() {
    return this.appService.findAll();
  }
  @Post()
  create(@Body() body: unknown) {
    return this.appService.create(body);
  }
}
