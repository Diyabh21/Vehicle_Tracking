import React, { Component } from "react";
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Vehicle ID',
    dataIndex: 'vehicle_id',
    key: 'vehicle_id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Trip ID',
    dataIndex: 'trip_id',
    key: 'trip_id',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'green' : 'red';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (text, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const data = [
  {
    key: '101',
    vehicle_id: '101',
    trip_id: "01",
    status: ['On Trip'],
  },
  {
    key: '102',
    vehicle_id: '102',
    trip_id: "02",
    status: ['Halt'],
  },
  {
    key: '103',
    vehicle_id: '103',
    trip_id: "03",
    status: ['On Trip'],
  },
];


class Logs extends Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Logs;