'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class TeacherLoginCaptcha extends React.Component{


    render(){
        return (
            <div>
                <div className="captcha-input">
                    <input className="form-control" type="text" placeholder="请输入验证码" name="captcha"/>
                </div>
                <div className="pull-right captcha-img">

                    <img title="点击刷新验证码"/>
                    <i className={'fa fa-spinner fa-spin loading captcha-loading'}/>
                </div>

            </div>
        );


    }
}
export default TeacherLoginCaptcha;