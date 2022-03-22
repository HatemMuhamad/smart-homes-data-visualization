# smart-homes-data-visualization

## Software stack:
- React
- rechart
- Nest.js
- REST
- sequelize
- PostgreSQL

## Problem Description
A simple dashboard is created for visualizing electrical consumption for a group of homes.
A dataset that includes information collected from multiple smart home electricity monitoring devices is used. Data is sampled at one minute intervals.

## Solution
A simple React web app that displays the daily wattage consumption over time on a line chart.

A user could filter the power consumption based on serial number, which represents a unique device placed within a household, or by device ID.

## How to run the application

### Run server
The server runs on port 44334. You can change the port used in the main.ts file.
- To run the server navigate to the `node-server` folder
- Open the cmd/terminal and run `npm install`
- From the terminal run `npm run start:dev`

### Run React-app

The react-app runs on port 3000.
- To run the react-app navigate to the `react-app` folder
- Open the cmd/terminal and run `npm install`
- From the terminal run `npm start`


## Known issues with the implementation:
- Serial number and device ID joint filtering is not implemented
- If user enters an invalid device ID or serial number, an empty chart is displayed (room for improvement: display a message to notify the user that serial number/device id is not found)
- Main page needs better desiging and styling
