import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SubscribeModule } from './subscribe/subscribe.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
      exclude: ['/api*'],
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.CLOUD_DB),

    SubscribeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
