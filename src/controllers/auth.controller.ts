import {
    Controller,
    Post,
    Body,
  } from '@nestjs/common';
  import { Auth } from 'src/models/auth.model';
  import { AuthService } from 'src/services/auth.service';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @Post('login')
    async signIn(
        @Body() user: Auth,
    ): Promise<Object> {
      return this.authService.signIn(user);
    }
  }
  