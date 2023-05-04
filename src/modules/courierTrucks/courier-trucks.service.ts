import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourierTruck } from './schema/courierTruck.schema';
import { CreateCourierTruckDto } from './dto/create-courierTruck.dto';
import { CourierTruckStatus } from './courierTruckStatus.enum';
import { HttpException, HttpStatus } from '@nestjs/common';

export interface CourierTruckStatusHistory {
  status: CourierTruckStatus;
  timestamp: Date;
}
@Injectable()
export class CourierTrucksService {
  constructor(
    @InjectModel(CourierTruck.name)
    private readonly courierTruckModel: Model<CourierTruck>,
  ) {}

  async create(
    createCourierTruckDto: CreateCourierTruckDto,
  ): Promise<CourierTruck> {
    const createdCourierTruck = new this.courierTruckModel(
      createCourierTruckDto,
    );
    return createdCourierTruck.save();
  }

  async count(): Promise<number> {
    return this.courierTruckModel.countDocuments();
  }

  async updateStatus({
    truckName,
    newStatus,
  }: {
    truckName: string;
    newStatus: CourierTruckStatus;
  }): Promise<any> {
    const courierTruck = await this.courierTruckModel.findOne({
      name: truckName,
    });
    if (!courierTruck) {
      throw new HttpException('Courier truck not found.', HttpStatus.NOT_FOUND);
    }
    const lastStatus =
      courierTruck.statusHistory[courierTruck.statusHistory.length - 1];
    if (lastStatus.status !== newStatus) {
      courierTruck.statusHistory.push({
        status: newStatus,
        timestamp: new Date(),
      });
    } else {
      throw new HttpException(
        'Status is the same as the last one. No update needed.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const { _id, ...result } = courierTruck.toObject();
    return { ...result };
  }
  async getStatusHistory(
    truckName: string,
  ): Promise<CourierTruckStatusHistory[]> {
    const courierTruck = await this.courierTruckModel.findOne({
      name: truckName,
    });

    if (!courierTruck) {
      throw new HttpException('Courier truck not found.', HttpStatus.NOT_FOUND);
    }

    return courierTruck.statusHistory;
  }

  async getLastUpdatedStatus(
    truckName: string,
  ): Promise<CourierTruckStatusHistory> {
    const courierTruck = await this.courierTruckModel.findOne({
      name: truckName,
    });

    if (!courierTruck) {
      throw new HttpException('Courier truck not found.', HttpStatus.NOT_FOUND);
    }

    return courierTruck.statusHistory[courierTruck.statusHistory.length - 1];
  }
}
