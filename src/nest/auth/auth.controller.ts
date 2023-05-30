import { Controller, Post, Body } from '@nestjs/common';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';
import { ApiResponse, ApiBody, ApiHeader } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: 201,
    description: 'Get an access_token',
    content: {
      'application/json': {
        schema: {
          type: 'object',
        },
        example: {
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0aXR1dGlvbklkIjoiMWEwZGRmMWYtOWM0Ny00ZWE0LTgwMTUtZmNhMzIzZDMxMDA0IiwiaW5zdGl0dXRpb25JbmVwQ29kIjoiMjYxMjc3OTIiLCJpYXQiOjE2ODUyNDE3NjMsImV4cCI6MTY4NTI0NTM2M30.mJWV6ycsyDd6EshpgrEHMTe16enfY8ACjWj-Y6daLNw',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  @ApiBody({
    description: '',
    schema: {
      type: 'object',
      properties: {
        inepCod: { type: 'string' },
        password: { type: 'string' },
      },
      example: {
        inepCod: '26118734',
        password: '26118734',
      },
    },
  })
  @ApiHeader({
    name: 'Content-Type',
    description: 'application/json',
  })
  async signIn(@Body() user: Auth): Promise<Object> {
    return this.authService.signIn(user);
  }
}
