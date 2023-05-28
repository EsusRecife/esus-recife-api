import { NestFactory } from '@nestjs/core';
import { AppModule } from './nest/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    methods: ['GET', 'PUT', 'POST'],
    allowedHeaders: [
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
    ],
  });

  const config = new DocumentBuilder()
    .setTitle('Esus Recife API')
    .setDescription('')
    .setVersion('1.0')
    .addTag('esusrecife')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
main();
