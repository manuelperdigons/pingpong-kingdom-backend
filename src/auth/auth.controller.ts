import { Controller, Get, Post, Body, Response } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('')
export class AuthController {
    constructor(private readonly appService: AuthService) { }

    @Post('/login')
    login(@Body() body, @Response() res) {
        return this.appService.logIn(body, res);
    }
    @Post('/signup')
    signup(@Body() body, @Response() res) {
        return this.appService.signup(body, res);
    }
}
