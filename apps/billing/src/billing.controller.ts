import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { BillingService } from './billing.service';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @MessagePattern('')
  sendBilling(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('... on message pattern received from rabbit');
    console.log({ data });
    return {
      ...data,
      success: true,
    };
  }
}
