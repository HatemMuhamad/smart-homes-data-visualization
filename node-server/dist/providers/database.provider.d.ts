import { Sequelize } from 'sequelize-typescript';
export declare const databaseProvider: {
    provide: string;
    useFactory: () => Promise<Sequelize>;
}[];
