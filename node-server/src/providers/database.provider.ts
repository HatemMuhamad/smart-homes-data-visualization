import { reading } from 'src/reading/entities/reading.entity';
import { Sequelize } from 'sequelize-typescript';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
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
      sequelize.addModels([reading]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
