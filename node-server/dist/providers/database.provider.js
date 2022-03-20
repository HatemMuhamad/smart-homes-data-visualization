"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = void 0;
const reading_entity_1 = require("../reading/entities/reading.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
exports.databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: process.env.DATABASE_HOST,
                port: 5432,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                define: {
                    timestamps: false,
                },
                dialectOptions: {
                    ssl: {
                        require: true,
                    },
                },
            });
            sequelize.addModels([reading_entity_1.reading]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.provider.js.map