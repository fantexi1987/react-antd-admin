import React from 'react'
import { Table } from 'antd';
import { randomUser } from '@/api/table';

import PanelBox from '../../components/PanelBox';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

export default class TablePage extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };
  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }
  fetch = (params = {}) => {
    this.setState({ loading: true });
    randomUser({
      results: 10,
      ...params,
    }).then((data) => {
      data = data.data;
      const pagination = this.state.pagination;
      // Read total count from server
      pagination.defaultCurrent = data.info.page;
      pagination.pageSize = data.info.results;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    return (
      <PanelBox title="Table Page">
        <Table columns={columns}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </PanelBox>
    );
  }
}
