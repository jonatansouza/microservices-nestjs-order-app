import { Transport } from '@nestjs/microservices';
import { RABBIT_URL } from '../constants';

export class RabbitmqService {
  getOptions(queue: string, noAck = false) {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [RABBIT_URL],
        queue: `RABBIT_MQ_${queue}_QUEUE`,
        noAck,
        persistent: true,
      },
    };
  }
}
