import React, { Component } from 'react';
import { Button } from 'antd';

class Login extends Component {
    state = {};
    register = ()=>{
        this.props.history.push({
			pathname: '/register/step1',
		});
    };
	render() {
		return (
			<div>
				<div>邮箱号：</div>
				<div>密码：</div>
				<div>登录</div>
				<div>
					<Button type="primary">找回密码</Button>
					<Button type="primary" onClick={()=>this.register()}>注册</Button>
				</div>
			</div>
		);
	}
}

export default Login;
