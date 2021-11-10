import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, HttpStatus } from '@nestjs/common';
import { Subscribe, SubscribeDocument } from './schemas/subscribe.schema';
import { ISubscribe } from './interface/subscribe.interface';
import { Response } from 'express';

@Injectable()
export class SubscribeService {
  constructor(
    @InjectModel(Subscribe.name)
    private subscribeModel: Model<SubscribeDocument>,
  ) {}

  async subscribe(res: Response, data: ISubscribe): Promise<void> {
    const createdSubscribe = new this.subscribeModel(data);
    try {
      res.status(HttpStatus.CREATED).json(await createdSubscribe.save());
    } catch (error) {
      if (error?.code === 11000) {
        res.status(HttpStatus.ACCEPTED).json(data);
      }
    }
  }
}
