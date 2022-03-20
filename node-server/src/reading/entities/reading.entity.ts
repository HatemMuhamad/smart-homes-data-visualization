import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class reading extends Model {
  @PrimaryKey
  @Column
  Serial_Number: string;
  @Column
  DateTime: Date;
  @Column
  Device_ID: string;
  @Column
  Device_Name: string;
  @Column
  User_Device_Name: string;
  @Column
  Device_Type: string;
  @Column
  Device_Make: string;
  @Column
  Device_Model: string;
  @Column
  Device_Location: string;
  @Column
  Wattage: number;
}
