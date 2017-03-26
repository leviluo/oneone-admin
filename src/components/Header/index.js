import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import {loginOut,isAuth} from '../../reducers/auth'
import {connect} from 'react-redux'
import './Header.scss'
import 'font-awesome/scss/font-awesome.scss'
import {tipShow} from '../Tips/modules/tips'

@connect(
  state=>({auth:state.auth}),
{loginOut,isAuth,tipShow})
export default class Header extends Component{

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount =()=>{
    if(!this.props.auth.isAuth)this.props.isAuth()
  }

  loginOut =()=>{
    this.props.loginOut(this.context.router);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render(){
    const{auth} = this.props;
    console.log(auth)
    return(
        <header>
          <nav>
          <span className="pull-left">
            <h1 ><IndexLink to="/" className="brand">OneOne</IndexLink></h1>
            <h4 >管理后台</h4>
          </span>
            <div className="headerRight">
             {!auth.isAuth && <span><Link to='/'>登录</Link>
             </span>}
             {auth.isAuth && <span><a onClick={this.loginOut}>退出</a>
             <Link to="/admincenter"><i className="fa fa-user-circle"></i>&nbsp;{auth.account}</Link></span>}
             </div>
          </nav>
        </header>
      )
  }
}

