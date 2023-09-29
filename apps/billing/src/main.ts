import { RabbitmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const options = app
    .get<RabbitmqService>(RabbitmqService)
    .getOptions('BILLING');
  app.connectMicroservice(options);
  await app.startAllMicroservices();
}
bootstrap();
