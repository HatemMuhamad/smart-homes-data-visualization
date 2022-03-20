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
exports.reading = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let reading = class reading extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], reading.prototype, "Serial_Number", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], reading.prototype, "DateTime", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], reading.prototype, "Device_ID", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], reading.prototype, "Device_Name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], reading.prototype, "User_Device_Name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], reading.prototype, "Device_Type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], reading.prototype, "Device_Make", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], reading.prototype, "Device_Model", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], reading.prototype, "Device_Location", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], reading.prototype, "Wattage", void 0);
reading = __decorate([
    sequelize_typescript_1.Table
], reading);
exports.reading = reading;
//# sourceMappingURL=reading.entity.js.map