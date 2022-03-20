import { reading } from './entities/reading.entity';
export declare class ReadingService {
    private readingRepository;
    constructor(readingRepository: typeof reading);
    getReadings(): Promise<reading[]>;
    getReadingsBySerialNumber(serialNumber: string): Promise<reading[]>;
    getReadingsByDeviceID(deviceID: string): Promise<reading[]>;
}
