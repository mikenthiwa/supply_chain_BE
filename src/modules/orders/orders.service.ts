import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schema/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { CourierTrucksService } from '../courierTrucks/courier-trucks.service';
import { CourierTruckStatus } from '../courierTrucks/courierTruckStatus.enum';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private readonly courierTrucksService: CourierTrucksService,
  ) {}
  async create(createOrderDto: CreateOrderDto): Promise<any> {
    try {
      const createdOrder = new this.orderModel(createOrderDto);
      const savedOrder = await createdOrder.save();

      const totalCourierTrucks = await this.courierTrucksService.count();
      const courierTruckName = `Truck ${totalCourierTrucks + 1}`;
      const initialStatus = {
        status: CourierTruckStatus.DISPATCHED,
        timestamp: new Date(),
      };

      const courierTruck = await this.courierTrucksService.create({
        name: courierTruckName,
        order: savedOrder._id,
        statusHistory: [initialStatus],
      });

      savedOrder.courierTruck = courierTruck._id;
      await savedOrder.save();
      const { __v, ...result } = savedOrder.toObject();
      return { ...result, truckName: courierTruckName };
    } catch (error) {
      // Customize the error handling based on the error type or message
      if (error.message.includes('validation failed')) {
        throw new BadRequestException('Validation failed', error.message);
      } else {
        throw new InternalServerErrorException(
          'An error occurred while initiating the order',
          error.message,
        );
      }
    }
  }
}
