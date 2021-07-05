import React, { Component } from "react";

import { Table } from 'antd';

const columns = [
  { title: 'Vehicle Name', dataIndex: 'vehicle_name', key: 'vehicle_name' },
  { title: 'Battery Voltage', dataIndex: 'battery_voltage', key: 'battery_voltage' },
  { title: 'Latitude', dataIndex: 'latitude', key: 'latitude' },
  { title: 'Longitude', dataIndex: 'longitude', key: 'longitude' },
  { title: 'Ignition', dataIndex: 'ignition', key: 'ignition' },
  { title: 'Speed', dataIndex: 'speed', key: 'speed' }
];

const data = [
  {
    key: 101,
    vehicle_name: 'Vehicle 1',
    battery_voltage: '12.5 Volts',
    latitude:'12.971599',
    longitude:'77.594566',
    ignition: 'ON',
    speed:'60 km/hr',
    trip_id: 101
  },
  {
    key: 102,
    vehicle_name: 'Vehicle 2',
    battery_voltage: '13.9 Volts',
    latitude:'12.971599',
    longitude:'77.594566',
    ignition: 'ON',
    speed:'60 km/hr',
  },
];

class Trips extends Component {
  render() {
    return (
      <div>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: record => <p style={{ margin: 0 }}>{record.trip_id?"MOVING":"HALT"}</p>,
            rowExpandable: record => record.name !== 'Not Expandable',
          }}
          dataSource={data}
        />
      </div>
    );
  }
}

export default Trips;