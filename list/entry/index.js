import React, { Component } from 'react';
import { Button  } from 'antd';
import { PageTemplate } from '@cfe/caopc-center-common'
import { urls } from '../config'
import './index.less'

const normalCol = [{
  title: '城市名称',
  dataIndex: 'cityName',
},{
  title: '城市代码',
  dataIndex: 'cityCode',
},{
  title: '公司名称',
  dataIndex: 'companyName',
},{
  title: '公章名称',
  dataIndex: 'sealName',
},{
  title: '提交时间',
  dataIndex: 'submitTime',
}];

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUnmount() {

  }

  renderOperate(val, index, {}) {

  }
  clickAddBtn = ()=>{

  }

  render() {
    const { } = this.props;
    const connect = ({onSearch, form }) => { this.onSearch = onSearch; this.form = form };
    const config  = {
      ...urls.fetchList,
      beforeRequest: val => val,
      afterRequest: val => val,
    };
    const columns = normalCol.concat(
      { title:'操作', dataIndex: 'operator', render: this.renderOperate.bind(this)});
    const toolbar = <div><Button onClick={this.clickAddBtn}>新建</Button></div>;
    const filter = [
      {
        component: 'Input', key: '', label: ''
      },
      {
        component: 'Input', key: '', label: ''
      }
    ];


    return <div className="{{pageName}}">
      <PageTemplate
        rowKey="id"
        connect={connect}
        columns={columns}
        toolbar={toolbar}
        config={config}
        filter={filter}
      />
    </div>
  }
}
