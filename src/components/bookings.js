import React, { Component } from "react";
import { Line } from '@ant-design/charts';

const data = [
    { date: '05.07.2021', bookings: 3 },
    { date: '06.07.2021', bookings: 4 },
    { date: '07.07.2021', bookings: 9 },
    { date: '08.07.2021', bookings: 10 },
    { date: '09.07.2021', bookings: 4 },
    { date: '10.07.2021', bookings: 10 },
    { date: '11.07.2021', bookings: 4 },
    { date: '12.07.2021', bookings: 17 },
    { date: '13.07.2021', bookings: 9 },
    { date: '14.07.2021', bookings: 10 },
    { date: '15.07.2021', bookings: 4 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'bookings',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

class Bookings extends Component {
  render() {
    return (
      <div>
        <Line {...config} />
      </div>
    );
  }
}

export default Bookings;