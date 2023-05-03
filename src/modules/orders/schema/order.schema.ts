import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop()
  orderNumber: string;

  @Prop({ type: Types.ObjectId, ref: 'CourierTruck' })
  courierTruck: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
