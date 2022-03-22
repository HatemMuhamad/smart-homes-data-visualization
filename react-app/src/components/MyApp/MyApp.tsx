import { Reading } from '../common/Types';
import LChart from '../linechart/Chart';
import React, { useState, useEffect } from 'react'
import * as rentalApi from '../../api/ReadingApi';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AxiosResponse } from 'axios';

const data = [
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
  ];

export default function MyApp() {

    const [readings, setReadings] = useState<Reading[]>([]);
    const [readingsToDisplay, setReadingsToDisplay] = useState<Reading[]>([]);

    useEffect(() => {
        handleGetAndSetRentals();
    }, []);

    function handleGetAndSetRentals(): void {
        rentalApi.GetReadings().then((retrievedReadings: AxiosResponse<Reading[]>) => {
            setReadings(retrievedReadings.data);
            setReadingsToDisplay(retrievedReadings.data);
            console.log(retrievedReadings.data)
            console.log(typeof(readingsToDisplay))
        }).catch((error) =>{
            console.log('some errors when getting readings for display');
            console.log(error);
        });
    }

    
    return (
        <>
        <h1>Hello World</h1>
        </>
    )
}
