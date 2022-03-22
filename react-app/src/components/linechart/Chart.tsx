import React from "react";
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Reading } from '../common/Types';

interface Props {
  chartData: Reading[];
}

export default function LChart({chartData} : Props) {

  return (
    <ResponsiveContainer width="80%" aspect={3}>
    <LineChart
      width={500}
      height={320}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 400,
        bottom: 70,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" angle={-35} textAnchor='end'>
        <Label value="Time (Days)" position="bottom" offset={45} />
      </XAxis>
      <YAxis unit="MW">
        <Label value="Wattage (Megawatts)" angle={270} position='left' style={{ textAnchor: 'middle' }}></Label>
        </YAxis> 
      <Tooltip />
      <Legend layout="vertical" verticalAlign="top" align="right" />
      <Line type="monotone" dataKey="Wattage_Daily_Sum" stroke="#8884d8" activeDot={{ r: 12 }} />
    </LineChart>
  </ResponsiveContainer>
  );
}
