import React, { Component } from 'react';
import { Button, message } from 'antd';
import { login } from '@api';

class Login extends Component {
	state = {
		mail: '',
		password: '',
	};
	register = () => {
		this.props.history.push({
			pathname: '/register/step1',
		});
	};
	handleLogin = async () => {
		const { mail, password } = this.state;
		const { count } = await login(mail, password);
		if (count === 0) {
			message.warning('邮箱或密码错误！');
		} else {
			message.success('登录成功！');
			this.props.history.push({
				pathname: '/main/mine',
			});
		}
	};
	render() {
		const { mail, password } = this.state;
		return (
			<div>
				<div>
					邮箱号：
					<input value={mail} onChange={(e) => this.setState({ mail: e.target.value })} />
				</div>
				<div>
					密码：
					<input value={password} type="password" onChange={(e) => this.setState({ password: e.target.value })} />
				</div>
				<div>
					<Button type="primary" onClick={this.handleLogin}>登录</Button>
				</div>
				<div>
					<Button type="primary">找回密码</Button>
					<Button type="primary" onClick={this.register}>
						注册
					</Button>
				</div>
			</div>
		);
	}
}

export default Login;
