import { Reading } from '../common/Types';
import LChart from '../linechart/Chart';
import React, { useState, useEffect } from 'react'
import * as rentalApi from '../../api/ReadingApi';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AxiosResponse } from 'axios';

const data: Reading[] = [
  {
    day: "2019-04-29T06:00:00.000Z",
    Wattage_Daily_Sum: 15594174.6608
  },
  {
    day: "2019-04-29T06:00:00.000Z",
    Wattage_Daily_Sum: 15594174.6608
  }
]

export default function MyApp() {

    const [readings, setReadings] = useState<Reading[]>([]);
    const [readingsToDisplay, setReadingsToDisplay] = useState<Reading[]>([]);

    useEffect(() => {
        handleGetAndSetRentals();
    }, []);

    function formatData(readings: Reading[]): Reading[] {
        let formattedData: Reading[] = [];
        readings.forEach((element) => {
          let formattedDate = element.day.substring(0,10);
          let megaWatts: number = +(element.Wattage_Daily_Sum / 1000000).toFixed(2);
          let formattedReading: Reading = { day: formattedDate, Wattage_Daily_Sum: megaWatts};
          formattedData.push(formattedReading);
        })
        return formattedData;
    }

    function handleGetAndSetRentals(): void {
        rentalApi.GetReadings().then((retrievedReadings: AxiosResponse<Reading[]>) => {
            setReadings(retrievedReadings.data);
            setReadingsToDisplay(formatData(retrievedReadings.data));
        }).catch((error) =>{
            console.log('some errors when getting readings for display');
            console.log(error);
        });
    }

    
    return (
        <>
        <h1>Hello World</h1>
        <LChart chartData={readingsToDisplay}/>
        </>
    )
}
