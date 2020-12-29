import React, { Component } from 'react';
import { Button, message } from 'antd';

class Login extends Component {
	state = {
		step: 'step1',
	};
	componentDidMount() {
		const step = this.props.match.params.step;
		this.setState({ step });
	}
	nextStep = () => {
		this.setState({ step: 'step2' });
    };
    finishRegister = () => {
        message.success('注册成功！')
    };
	render() {
        const { step } = this.state;
        console.log('%c[ step ]', 'font-size:13; background:pink; color:#bf2c9f;', step)
		return (
			<div>
				{step === 'step1' ? (
					<div>
						<div>邮箱号：</div>
						<div>验证码：</div>
						<Button type="primary" onClick={this.nextStep}>
							下一步
						</Button>
					</div>
				) : (
					<div>
						<div>密码：</div>
						<div>再次确认：</div>
						<Button type="primary" onClick={() => this.finishRegister()}>
							完成
						</Button>
					</div>
				)}
			</div>
		);
	}
}

export default Login;
