import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  version(): { version: string; status: string } {
    return {
      version: '0.0.1',
      status: 'ok',
    };
  }
}
