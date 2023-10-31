import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

function enableSwagger(app: INestApplication) {
  const documentBuilder = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Possible Trip Dates API')
    .setDescription('Api to list possible trip date')
    .setVersion('v1.0')
    .setContact('Adriano Victor', '', 'adrianovictor@hotmail.com');

  const document = SwaggerModule.createDocument(app, documentBuilder.build());

  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  enableSwagger(app);

  await app.listen(3000);
}

bootstrap();
