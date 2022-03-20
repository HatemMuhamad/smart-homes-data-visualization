"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingService = void 0;
const common_1 = require("@nestjs/common");
let ReadingService = class ReadingService {
    constructor(readingRepository) {
        this.readingRepository = readingRepository;
    }
    async getReadings() {
        return this.readingRepository.findAll();
    }
    async getReadingsBySerialNumber(serialNumber) {
        return this.readingRepository.findAll({ where: { Serial_Number: serialNumber } });
    }
    async getReadingsByDeviceID(deviceID) {
        return this.readingRepository.findAll({ where: { Device_ID: deviceID } });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReadingService.prototype, "getReadings", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReadingService.prototype, "getReadingsBySerialNumber", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReadingService.prototype, "getReadingsByDeviceID", null);
ReadingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('READINGS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], ReadingService);
exports.ReadingService = ReadingService;
//# sourceMappingURL=reading.service.js.map