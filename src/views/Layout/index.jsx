import React from 'react';
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Layout, Affix , Row, Col} from 'antd';
import { Route, Redirect } from 'react-router-dom';

import authHOC from '@/utils/auth'

import NavPath from '@/components/NavPath'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
import {fetchProfile, logout} from '@/actions/auth';

import { getChildRoutesFn } from '@/api/menu'

import './index.less';

import AsyncComponent from '@/route/AsyncComponent';

const { Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    childRoutes: JSON.parse(sessionStorage.getItem("menuData")) || []
  }

  initRoutes = function(){
    if(this.state.childRoutes.length){
      let data = JSON.parse(sessionStorage.getItem("menuData"));
      this.initRoutesData(data);
    }else {
      getChildRoutesFn().then( res => {
        let data = res.data;
        sessionStorage.setItem("menuData", JSON.stringify(data));
        this.initRoutesData(data);
      })
    }
  }

  initRoutesData = function(data){
    if(data && data.length){
      data.forEach(function(element) {
        element.component = AsyncComponent(() => {
            return import(/* webpackChunkName: "[request]" */ "@/views" + element.componentUrl)
        })
      })
      this.setState({
        childRoutes: data
      })
    }
  }

  componentWillMount() {
    const {actions} = this.props;
    actions.fetchProfile();
    this.initRoutes();
  }

  render() {
    const { auth, navpath, actions } = this.props;
    const { childRoutes } = this.state;
    return (
      <Layout className="ant-layout-has-sider">
        <Sidebar />
        <Layout>
          <Header profile={auth} logout={actions.logout} />
          <Content style={{ margin: '0 16px' }}>
            <NavPath data={navpath} />
            <div style={{ minHeight: 360 }}>
              {childRoutes.map((route, index) => (
                <Route key={index} path={route.path} component={authHOC(route.component)} exact />
              ))}
              <Route path="/" render={()=><Redirect to="/home"/>} exact />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

App.propTypes = {
  auth: PropTypes.object,
  navpath: PropTypes.array
};

const mapStateToProps = (state) => {
  const { auth, menu } = state;
  return {
    auth: auth ? auth : null,
    navpath: menu.navpath
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchProfile, logout}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
