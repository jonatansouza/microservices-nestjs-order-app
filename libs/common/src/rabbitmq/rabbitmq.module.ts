import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitmqService } from './rabbitmq.service';

interface RmqModuleOptions {
  name: string;
}

@Module({
  providers: [RabbitmqService],
  exports: [RabbitmqService],
})
export class RmqModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: () => ({
              transport: Transport.RMQ,
              options: {
                urls: ['amqp://localhost:5672'],
                queue: `RABBIT_MQ_BILLING_QUEUE`,
              },
            }),
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
