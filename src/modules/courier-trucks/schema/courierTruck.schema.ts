import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class CourierTruck extends Document {
  @Prop()
  name: string;

  @Prop({ type: Types.ObjectId, ref: 'Order' })
  order: string;

  @Prop()
  statusHistory: [
    {
      status: string;
      timestamp: Date;
    },
  ];
}

export const CourierTruckSchema = SchemaFactory.createForClass(CourierTruck);
