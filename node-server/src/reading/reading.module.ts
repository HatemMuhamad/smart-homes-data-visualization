import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ReadingProvider } from 'src/providers/reading.provider';
import { ReadingController } from './reading.controller';
import { ReadingService } from './reading.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ReadingController],
  providers: [...ReadingProvider, ReadingService],
})
export class ReadingModule {}
