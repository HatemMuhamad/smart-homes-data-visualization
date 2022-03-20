import { Model } from 'sequelize-typescript';
export declare class reading extends Model {
    Serial_Number: string;
    DateTime: Date;
    Device_ID: string;
    Device_Name: string;
    User_Device_Name: string;
    Device_Type: string;
    Device_Make: string;
    Device_Model: string;
    Device_Location: string;
    Wattage: number;
}
