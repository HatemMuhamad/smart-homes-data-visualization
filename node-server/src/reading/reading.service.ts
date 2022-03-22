import { Get, Inject, Injectable, Param } from '@nestjs/common';
import { group } from 'console';
import { Sequelize } from 'sequelize-typescript';
import { reading } from './entities/reading.entity';

@Injectable()
export class ReadingService {
  constructor(
    @Inject('READINGS_REPOSITORY')
    private readingRepository: typeof reading,
  ) {}

  @Get()
  async getReadingsByDay(): Promise<reading[]> {
    return this.readingRepository.findAll({
      attributes: [
        ["date_trunc('day', \"DateTime\")","day"],
        [Sequelize.literal("SUM(\"Wattage\")"),"Wattage_Daily_Sum"],
      ],
      group: ["day"],
      order: [
        [Sequelize.literal('day'), 'ASC']
    ],
    });

  }

  @Get(':id')
  async getReadingsBySerialNumber(serialNumber: string): Promise<reading[]> {
    return this.readingRepository.findAll({
      where: {
        Serial_Number: serialNumber
      },
      attributes: [
        ["date_trunc('day', \"DateTime\")","day"],
        [Sequelize.literal("SUM(\"Wattage\")"),"Wattage_Daily_Sum"],
      ],
      group: ["day"],
      order: [
        [Sequelize.literal('day'), 'ASC']
    ],
    });;
  }

  @Get(':id')
  async getReadingsByDeviceID(deviceID: string): Promise<reading[]> {
    return this.readingRepository.findAll({
      where: {
        Device_ID: deviceID
      },
      attributes: [
        ["date_trunc('day', \"DateTime\")","day"],
        [Sequelize.literal("SUM(\"Wattage\")"),"Wattage_Daily_Sum"],
      ],
      group: ["day"],
      order: [
        [Sequelize.literal('day'), 'ASC']
    ],
    });;
  }

}