import { Controller, Get, Param } from '@nestjs/common';
import { reading } from './entities/reading.entity';
import { ReadingService } from './reading.service';

@Controller()
export class ReadingController {
  constructor(private readingService: ReadingService) {}

  @Get()
  getAllReadings(): Promise<reading[]> {
    return this.readingService.getReadingsByDay();
  }

  @Get('serialnumber/:serialNumber')
  getReadingsBySerialNumber(@Param('serialNumber') serialNumber: string): Promise<reading[]> {
    return this.readingService.getReadingsBySerialNumber(serialNumber);
  }

  @Get('deviceid/:deviceID')
  getReadingsByDeviceID(@Param('deviceID') deviceID: string): Promise<reading[]> {
    return this.readingService.getReadingsByDeviceID(deviceID);
  }
}
