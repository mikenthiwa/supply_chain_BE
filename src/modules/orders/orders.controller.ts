import {
  Controller,
  Post,
  Body,
  Request,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(
    @Request() req: any,
    @Response() res: any,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    const createdOrder = await this.ordersService.create(createOrderDto);
    res.send({
      status: 'success',
      statusCode: HttpStatus.CREATED,
      message: 'Order initiated successfully',
      response: createdOrder,
    });
  }
}
