import { Reading } from "../components/common/Types";
import axios, { AxiosResponse } from 'axios'
import {getAxios} from './BaseApi';


export function GetReadings(): Promise<AxiosResponse<Reading[]>>{

  return getAxios().get<Reading[]>('api/readings/');
}