import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Checkbox, Input, Collapse } from 'antd'
import Form from 'ant-form'
import './account.scss'
import Detail from './Detail.jsx'
import Address from './address/List.jsx'
import AddressEdit from './address/Edit.jsx'
import Order from './order/List.jsx'
import OrderDetail from './order/Detail.jsx'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    }
  }

  render() {
    const Index = () => <Collapse accordion bordered={false} defaultActiveKey={['1']}>
      <Collapse.Panel header="个人信息" key="1" className="customPanel">
        <Detail/>
      </Collapse.Panel>
      <Collapse.Panel header="地址薄" key="2" className="customPanel">
        <Address/>
      </Collapse.Panel>
      <Collapse.Panel header="订单" key="3" className="customPanel">
        <Order/>            
      </Collapse.Panel>
    </Collapse>
    return (
      <div className="account">
        <h1>我的账户</h1>
        <Switch>
          <Route exact path="/account/" component={Index} />
          <Route path="/account/address/add" component={AddressEdit} />
          <Route path="/account/address/edit" component={AddressEdit} />
          <Route path="/account/order" component={OrderDetail} />
        </Switch>

      </div>
    )
  }
}

export default Login;