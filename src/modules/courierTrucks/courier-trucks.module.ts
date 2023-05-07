import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourierTruckSchema, CourierTruck } from './schema/courierTruck.schema';
import { CourierTrucksService } from './courier-trucks.service';
import { CourierTrucksController } from './courier-truck.controller';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CourierTruck.name, schema: CourierTruckSchema },
    ]),
  ],
  providers: [CourierTrucksService],
  controllers: [CourierTrucksController],
  exports: [CourierTrucksService],
})
export class CourierTrucksModule {}
