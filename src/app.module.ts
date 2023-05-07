import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './modules/orders/orders.module';
import { CourierTrucksModule } from './modules/courierTrucks/courier-trucks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<any>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    OrdersModule,
    CourierTrucksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
