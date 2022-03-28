import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { config } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('game');
  const port = process.env.PORT || 3000;
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('game-doc', app, document);
  app.use(helmet());

  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
