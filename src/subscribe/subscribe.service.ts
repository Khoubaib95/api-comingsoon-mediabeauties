import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Subscribe, SubscribeDocument } from './schemas/subscribe.schema';

@Injectable()
export class SubscribeService {
  constructor(
    @InjectModel(Subscribe.name)
    private subscribeModel: Model<SubscribeDocument>,
  ) {}

  async sudscribe(data: { name: string; email: string }): Promise<Subscribe> {
    const newSubscribe = new this.subscribeModel(data);
    try {
      const createdSubscribe = await newSubscribe.save();
      return createdSubscribe;
    } catch (error) {
      if (error?.code === 11000) {
        return data;
      }
    }
  }
}
