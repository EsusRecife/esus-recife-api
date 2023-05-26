import { NestFactory } from '@nestjs/core';
import { AppModule } from './nest/app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    methods: ['GET', 'PUT', 'POST'],
    allowedHeaders: [
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
    ],
  });

  await app.listen(3000);
}
main();
