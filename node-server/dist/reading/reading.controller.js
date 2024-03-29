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
exports.ReadingController = void 0;
const common_1 = require("@nestjs/common");
const reading_service_1 = require("./reading.service");
let ReadingController = class ReadingController {
    constructor(readingService) {
        this.readingService = readingService;
    }
    getAllReadings() {
        return this.readingService.getReadingsByDay();
    }
    getReadingsBySerialNumber(serialNumber) {
        return this.readingService.getReadingsBySerialNumber(serialNumber);
    }
    getReadingsByDeviceID(deviceID) {
        return this.readingService.getReadingsByDeviceID(deviceID);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReadingController.prototype, "getAllReadings", null);
__decorate([
    (0, common_1.Get)('serialnumber/:serialNumber'),
    __param(0, (0, common_1.Param)('serialNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReadingController.prototype, "getReadingsBySerialNumber", null);
__decorate([
    (0, common_1.Get)('deviceid/:deviceID'),
    __param(0, (0, common_1.Param)('deviceID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReadingController.prototype, "getReadingsByDeviceID", null);
ReadingController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [reading_service_1.ReadingService])
], ReadingController);
exports.ReadingController = ReadingController;
//# sourceMappingURL=reading.controller.js.map