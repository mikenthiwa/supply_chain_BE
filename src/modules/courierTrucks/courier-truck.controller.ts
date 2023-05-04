import {
  Controller,
  HttpStatus,
  Body,
  Request,
  Response,
  Put,
  Get,
  Param,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

import { CourierTrucksService } from './courier-trucks.service';
import { UpdateCourierTruckDto } from './dto/update-courierTruck.dto';

@ApiTags('Courier Trucks')
@Controller('courier-trucks')
export class CourierTrucksController {
  constructor(private readonly courierTrucksService: CourierTrucksService) {}

  @ApiOperation({ summary: 'Update courier truck status' })
  @ApiBody({ type: UpdateCourierTruckDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The status of the courier truck has been updated.',
  })
  @Put('update-status')
  async updateStatus(
    @Request() req: any,
    @Response() res: any,
    @Body() updateCourierTruckDto: UpdateCourierTruckDto,
  ) {
    const updatedStatus = await this.courierTrucksService.updateStatus(
      updateCourierTruckDto,
    );
    res.send({
      status: 'success',
      statusCode: HttpStatus.OK,
      response: updatedStatus,
    });
  }

  @ApiOperation({ summary: 'Get status history of a courier truck' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The status history of the courier truck has been retrieved.',
  })
  @ApiParam({
    name: 'truckName',
    description: 'Name of the courier truck',
    example: 'Truck 1',
  })
  @Get(':truckName/status-history')
  async getStatusHistory(
    @Request() req: any,
    @Response() res: any,
    @Param('truckName') truckName: string,
  ): Promise<any> {
    const statusHistory = await this.courierTrucksService.getStatusHistory(
      truckName,
    );
    res.send({
      status: 'success',
      statusCode: HttpStatus.OK,
      response: statusHistory,
    });
  }

  @Get('last-updated-status/:truckName')
  async getLastUpdatedStatus(
    @Request() req: any,
    @Response() res: any,
    @Param('truckName') truckName: string,
  ) {
    const lastUpdatedStatus =
      await this.courierTrucksService.getLastUpdatedStatus(truckName);
    res.send({
      status: 'success',
      statusCode: HttpStatus.OK,
      response: lastUpdatedStatus,
    });
  }
}
