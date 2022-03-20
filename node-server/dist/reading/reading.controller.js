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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingController = void 0;
const common_1 = require("@nestjs/common");
const reading_service_1 = require("./reading.service");
let ReadingController = class ReadingController {
    constructor(readingService) {
        this.readingService = readingService;
    }
    getAllReadings() {
        return this.readingService.getReadings();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReadingController.prototype, "getAllReadings", null);
ReadingController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [reading_service_1.ReadingService])
], ReadingController);
exports.ReadingController = ReadingController;
//# sourceMappingURL=reading.controller.js.map