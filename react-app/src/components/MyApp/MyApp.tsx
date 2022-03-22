import { Reading } from '../common/Types';
import LChart from '../linechart/Chart';
import React, { useState, useEffect } from 'react'
import * as rentalApi from '../../api/ReadingApi';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AxiosResponse } from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default function MyApp() {

    const [readings, setReadings] = useState<Reading[]>([]);
    const [readingsToDisplay, setReadingsToDisplay] = useState<Reading[]>([]);
    const [filterParam, setFilterParam] = useState<string>('Filter');
    const [filterParamDisplay, setFilterParamDisplay] = useState('Filter');
    const [searchQuery, setSearchQuery] = useState('');

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

    const handleSelectFilterParam = (filterVal: string | null) => {
      setSearchQuery('');
      if(filterVal == null)
          filterVal='Filter';

      setFilterParamDisplay(filterVal);
      setFilterParam(filterVal.replace(' ', '').replace(filterVal[0], filterVal[0].toLowerCase())); // so it matches the id of our columns
  }

  const searchBySerialNumber = (query: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(query.target.value);
      rentalApi.GetReadingsBySerialNumber(query.target.value).then((retrievedReadings: AxiosResponse<Reading[]>) => {
        setReadings(retrievedReadings.data);
        setReadingsToDisplay(formatData(retrievedReadings.data));
    }).catch((error) =>{
        console.log('some errors when getting readings for display');
        console.log(error);
    });
  };
    
    return (
        <>
        <h1>Hello World</h1>
        <LChart chartData={readingsToDisplay}/>
        <div className="search-bar-filter">
        <input className="search-box"
            data-testid="search-input"
            id="searchQuery" type="text"
            value={searchQuery}
            onChange={searchBySerialNumber}
            placeholder='Search' />

    <DropdownButton
        className="filter-drop-down-position"
        title={filterParamDisplay}
        id="dropdown-basic-button"
        onSelect={handleSelectFilterParam}
        bsPrefix = "filter-drop-down"
        >
        <Dropdown.Item eventKey="Serial Number">Serial Number</Dropdown.Item>
    </DropdownButton>
    </div>
        </>
    )
}
