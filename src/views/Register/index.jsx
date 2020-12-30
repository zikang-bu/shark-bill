import React, { Component } from 'react';
import { Button, message } from 'antd';
import { register, sendCode, vertifyCode } from '@api';

class Login extends Component {
	state = {
		step: 'step1',
		mail: '',
		code: '',
		password: '',
		passwordConfirm: '',
		loading: false,
		second: 60,
	};
	componentDidMount() {
		const step = this.props.match.params.step;
		this.setState({ step });
	}
	getCode = async () => {
		const { mail } = this.state;
		const res = await sendCode(mail);
		console.log('%c[ res ]', 'font-size:13; background:pink; color:#bf2c9f;', res);
		this.setState({ loading: true, second: 60 });
		setTimeout(() => {
			this.setState({ loading: false });
		}, 60000);
		const timer = setInterval(() => {
			const { second } = this.state;
			if (second > 0) {
				this.setState({ second: second - 1 });
			} else {
				clearInterval(timer);
			}
		}, 1000);
	};
	nextStep = async () => {
		const { mail, code } = this.state;
		const res = await vertifyCode(mail, code);
		if (res.code === 1) {
			message.success(res.msg);
			this.setState({ step: 'step2' });
		} else {
			message.warning(res.msg);
		}
	};
	finishRegister = async () => {
		const { password, passwordConfirm } = this.state;
		if (password && passwordConfirm && password === passwordConfirm) {
			await register(password);
			message.success('注册成功！');
			this.props.history.push({
				pathname: '/login',
			});
		} else {
			!password || !passwordConfirm ? message.warning('请输入密码！') : message.warning('两次密码不一致！');
		}
	};
	render() {
		const { step, mail, code, password, passwordConfirm, loading, second } = this.state;
		return (
			<div>
				{step === 'step1' ? (
					<div>
						<div>
							邮箱号：
							<input value={mail} onChange={(e) => this.setState({ mail: e.target.value })} />
						</div>
						<div>
							验证码：
							<input value={code} onChange={(e) => this.setState({ code: e.target.value })} />
							<Button type="primary" onClick={this.getCode} size="small" disabled={loading}>
								获取验证码{loading ? second : ''}
							</Button>
						</div>
						<Button type="primary" onClick={this.nextStep}>
							下一步
						</Button>
					</div>
				) : (
					<div>
						<div>
							密码：
							<input value={password} onChange={(e) => this.setState({ password: e.target.value })} />
						</div>
						<div>
							再次确认：
							<input value={passwordConfirm} onChange={(e) => this.setState({ passwordConfirm: e.target.value })} />
						</div>
						<Button type="primary" onClick={this.finishRegister}>
							完成
						</Button>
					</div>
				)}
			</div>
		);
	}
}

export default Login;
