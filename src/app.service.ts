import { Injectable } from '@nestjs/common';
import { Subscribe } from './subscribe/interface/subscribe.interface';
@Injectable()
export class AppService {
  version(): { version: string; status: string } {
    return {
      version: '0.0.1',
      status: 'ok',
    };
  }
}
