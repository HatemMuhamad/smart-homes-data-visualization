import { Provider } from '@nestjs/common';
import { reading } from 'src/reading/entities/reading.entity';

export const ReadingProvider: Provider[] = [
  {
    provide: 'READINGS_REPOSITORY',
    useValue: reading,
  },
];
