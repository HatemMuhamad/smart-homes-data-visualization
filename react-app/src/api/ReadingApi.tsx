import { Reading } from "../components/common/Types";
import axios, { AxiosResponse } from 'axios'
import {getAxios} from './BaseApi';


export function GetReadings(): Promise<AxiosResponse<Reading[]>>{

  return getAxios().get<Reading[]>('api/readings/');
}

export function GetReadingsBySerialNumber(serialNumber: string): Promise<AxiosResponse<Reading[]>>{

  const apiCall = 'api/readings/serialnumber/' + serialNumber;
  return getAxios().get<Reading[]>(apiCall);
}