import { Reading } from '../common/Types';
import LChart from '../linechart/Chart';
import React, { useState, useEffect } from 'react'
import * as rentalApi from '../../api/ReadingApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css';
import { AxiosResponse } from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useForm } from "react-hook-form";

export default function DataVisualization() {

    const [readings, setReadings] = useState<Reading[]>([]);
    const [readingsToDisplay, setReadingsToDisplay] = useState<Reading[]>([]);
    const [filterParam, setFilterParam] = useState<string>('Filter');
    const [serialNumberParameter, setSerialNumberParameter] = useState('Filter');
    const [deviceIdParameter, setDeviceIdParameter] = useState('Filter');
    const [serialNumber, setSerialNumber] = useState('');
    const [deviceId, setDeviceId] = useState('');
    const { handleSubmit } = useForm();

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

    const handleSerialNumberParam = (filterVal: string | null) => {
      setSerialNumber('');
      if(filterVal == null)
          filterVal='Filter';

      setSerialNumberParameter(filterVal);
      setFilterParam(filterVal.replace(' ', '').replace(filterVal[0], filterVal[0].toLowerCase()));
  }

  const handleDeviceIdParam = (filterVal: string | null) => {
    setDeviceId('');
    if(filterVal == null)
        filterVal='Filter';

    setDeviceIdParameter(filterVal);
    setFilterParam(filterVal.replace(' ', '').replace(filterVal[0], filterVal[0].toLowerCase()));
}

const onFirstFormSubmit = (data: any, e: any) => {
  e.preventDefault();
    rentalApi.GetReadingsBySerialNumber(serialNumber).then((retrievedReadings: AxiosResponse<Reading[]>) => {
    setReadings(retrievedReadings.data);
    setReadingsToDisplay(formatData(retrievedReadings.data));
}).catch((error) =>{
    console.log('some errors when getting readings for display');
    console.log(error);
});
};

const onSecondFormSubmit = (data: any, e: any) => {
  e.preventDefault();
    rentalApi.GetReadingsByDeviceId(deviceId).then((retrievedReadings: AxiosResponse<Reading[]>) => {
    setReadings(retrievedReadings.data);
    setReadingsToDisplay(formatData(retrievedReadings.data));
}).catch((error) =>{
    console.log('some errors when getting readings for display');
    console.log(error);
});
};

const handleSerialNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSerialNumber(e.target.value);
};

const handleDeviceIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setDeviceId(e.target.value);
};
  
    return (
        <>
        <h1>Smart Homes Data Visualization</h1>
        <LChart chartData={readingsToDisplay}/>
        <form className="m-4" onSubmit={handleSubmit(onFirstFormSubmit)}>
              <div>
                  <h5 style={{fontFamily: "Inter"}}>
                      Search by serial number:
                  </h5>
                  <input className="general-input"
                      value={serialNumber}
                      onChange={handleSerialNumberChange} />

                  <DropdownButton
                  title={serialNumberParameter}
                  id="dropdown-basic-button"
                  onSelect={handleSerialNumberParam}
                  bsPrefix = "filter-drop-down"
                  >
                  <Dropdown.Item eventKey="Serial Number">Serial Number</Dropdown.Item>
                  </DropdownButton>
              </div>
                
              <div>
                <input type="submit" value="Search" className="general-button" style={{height: '45px', width: '104px' }} />
              </div>
        </form>

        <form className="m-4" onSubmit={handleSubmit(onSecondFormSubmit)}>
              <div>
              <h5 style={{fontFamily: "Inter"}}>
                      Search by device ID:
              </h5>
                  <input className="general-input"
                      value={deviceId}
                      onChange={handleDeviceIdChange} />

              <DropdownButton
              title={deviceIdParameter}
              id="dropdown-basic-button"
              onSelect={handleDeviceIdParam}
              bsPrefix = "filter-drop-down"
              >
              <Dropdown.Item eventKey="Device ID">Device ID</Dropdown.Item>
              </DropdownButton>
              </div>
                
              <div>
                <input type="submit" value="Search" className="general-button" style={{height: '45px', width: '104px' }} />
              </div>
        </form>
        </>
    )
}
