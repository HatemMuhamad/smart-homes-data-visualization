import { Inject, Injectable } from '@nestjs/common';
import { reading } from './entities/reading.entity';

@Injectable()
export class ReadingService {
  constructor(
    @Inject('READINGS_REPOSITORY')
    private readingRepository: typeof reading,
  ) {}

  async getReadings(): Promise<reading[]> {
    return this.readingRepository.findAll<reading>();
  }
}
