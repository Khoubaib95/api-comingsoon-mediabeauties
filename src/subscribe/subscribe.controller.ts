import { Controller, Post, Body, Res } from '@nestjs/common';
import { Subscribe } from './interface/subscribe.interface';
import { SubscribeService } from './subscribe.service';

@Controller('api/subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  sudscribe(@Body() data: { name: string; email: string }): Promise<Subscribe> {
    return this.subscribeService.sudscribe(data);
  }
}
