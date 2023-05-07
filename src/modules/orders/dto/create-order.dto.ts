import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    example: 'order1',
    description: 'Order number',
  })
  orderNumber: string;
}
