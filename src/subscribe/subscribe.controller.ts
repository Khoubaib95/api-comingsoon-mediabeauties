import { Controller, Post, Body, Res } from '@nestjs/common';
import { ISubscribe } from './interface/subscribe.interface';
import { SubscribeService } from './subscribe.service';
import { SubscribeDocument } from './schemas/subscribe.schema';
import { Response } from 'express';

@Controller('api/subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  sudscribe(@Res() res: Response, @Body() data: ISubscribe): Promise<void> {
    return this.subscribeService.subscribe(res, data);
  }
}
