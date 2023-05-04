import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/order.schema';
import {
  CourierTruckSchema,
  CourierTruck,
} from '../courierTrucks/schema/courierTruck.schema';
import { OrdersService } from './orders.service';
import { CourierTrucksService } from '../courierTrucks/courier-trucks.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([
      { name: CourierTruck.name, schema: CourierTruckSchema },
    ]),
  ],
  providers: [OrdersService, CourierTrucksService],
  controllers: [OrdersController],
})
export class OrdersModule {}
