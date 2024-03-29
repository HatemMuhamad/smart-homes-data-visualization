import { reading } from './entities/reading.entity';
import { ReadingService } from './reading.service';
export declare class ReadingController {
    private readingService;
    constructor(readingService: ReadingService);
    getAllReadings(): Promise<reading[]>;
    getReadingsBySerialNumber(serialNumber: string): Promise<reading[]>;
    getReadingsByDeviceID(deviceID: string): Promise<reading[]>;
}
