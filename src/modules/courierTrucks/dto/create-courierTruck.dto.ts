import { CourierTruckStatus } from '../courierTruckStatus.enum';

export class CreateCourierTruckDto {
  name: string;
  order: string;
  statusHistory: [
    {
      status: CourierTruckStatus;
      timestamp: Date;
    },
  ];
}
