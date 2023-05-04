import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CourierTruckStatus } from '../courierTruckStatus.enum';

@Schema({
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
    },
  },
})
export class CourierTruck extends Document {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Order' })
  order: string;

  @Prop()
  statusHistory: [
    {
      status: CourierTruckStatus;
      timestamp: Date;
    },
  ];
}

export const CourierTruckSchema = SchemaFactory.createForClass(CourierTruck);
