"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const reading_provider_1 = require("../providers/reading.provider");
const reading_controller_1 = require("./reading.controller");
const reading_service_1 = require("./reading.service");
let ReadingModule = class ReadingModule {
};
ReadingModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [reading_controller_1.ReadingController],
        providers: [...reading_provider_1.ReadingProvider, reading_service_1.ReadingService],
    })
], ReadingModule);
exports.ReadingModule = ReadingModule;
//# sourceMappingURL=reading.module.js.map