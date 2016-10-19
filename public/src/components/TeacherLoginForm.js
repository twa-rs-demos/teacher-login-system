'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class TeacherLoginForm extends React.Component{


    render(){
        var classString = 'col-md-7';
        return <div id="login" className={classString}>
                <div>
            <h4 className="welcome">欢迎登录思沃学院</h4>
                <input className="form-control" type="text" placeholder="请输入邮箱或手机号" name="email"/>
                <input className="form-control" type="password" placeholder="请输入密码" name="loginPassword"/>
            </div>
            <div className="captcha-input">
                <input className="form-control" type="text" placeholder="请输入验证码" name="captcha"/>
            </div>
            <div className="pull-right captcha-img">

                <img title="点击刷新验证码"/>
                <i className={'fa fa-spinner fa-spin loading captcha-loading'}/>
            </div>
            <button type="submit" id="login-btn" className="btn btn-lg btn-block btn-primary">登录
            </button>
        </div>
    }
}
export default TeacherLoginForm;