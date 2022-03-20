import { reading } from './entities/reading.entity';
export declare class ReadingService {
    private readingRepository;
    constructor(readingRepository: typeof reading);
    getReadings(): Promise<reading[]>;
}
