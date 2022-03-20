import { Get, Inject, Injectable, Param } from '@nestjs/common';
import { reading } from './entities/reading.entity';

@Injectable()
export class ReadingService {
  constructor(
    @Inject('READINGS_REPOSITORY')
    private readingRepository: typeof reading,
  ) {}

  @Get()
  async getReadings(): Promise<reading[]> {
    return this.readingRepository.findAll<reading>();
  }

  @Get(':id')
  async getReadingsBySerialNumber(serialNumber: string): Promise<reading[]> {
    return this.readingRepository.findAll({where: {Serial_Number: serialNumber}});
  }
}