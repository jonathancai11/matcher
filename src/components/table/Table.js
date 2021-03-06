import React from 'react';
import { Table } from 'antd';
import './Table.css'

export default function MyTable(props) {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      props.onSelectRow(selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div>
      <Table 
      rowSelection={{
        type: props.selectType,
        ...rowSelection,
      }}
      dataSource={props.data} 
      columns={props.columns}
      bordered 
      size="small" 
      scroll={{ y: 500 }}
      />
    </div>
  );
}