import { ApiProperty } from '@nestjs/swagger';
import { CourierTruckStatus } from '../courierTruckStatus.enum';
import { IsNotEmpty } from 'class-validator';

export class UpdateCourierTruckDto {
  @ApiProperty({
    description: 'Name of the courier truck',
    example: 'Truck 1',
  })
  @IsNotEmpty()
  truckName: string;

  @ApiProperty({
    example: 'ARRIVED_AT_FARM',
    description: 'New status for the courier truck.',
    enum: Object.keys(CourierTruckStatus),
  })
  @IsNotEmpty()
  newStatus: CourierTruckStatus;
}
