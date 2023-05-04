import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
    },
  },
})
export class Order extends Document {
  @Prop()
  orderNumber: string;

  @Prop({ type: Types.ObjectId, ref: 'CourierTruck' })
  courierTruck: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
