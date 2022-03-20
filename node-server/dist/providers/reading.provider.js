"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingProvider = void 0;
const reading_entity_1 = require("../reading/entities/reading.entity");
exports.ReadingProvider = [
    {
        provide: 'READINGS_REPOSITORY',
        useValue: reading_entity_1.reading,
    },
];
//# sourceMappingURL=reading.provider.js.map