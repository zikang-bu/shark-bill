import React, { Component } from 'react';
import { Avatar } from 'antd';
import { EuroOutlined } from '@ant-design/icons';
import './index.scss';
class Mine extends Component {
	state = {};

	login = () => {
		this.props.history.push({
			pathname: '/login',
		});
	};

	render() {
		return (
			<div>
				<div className="mine_header">
					<div onClick={() => this.login()}>
						<Avatar icon={<EuroOutlined />} />
						未登录
					</div>
				</div>
			</div>
		);
	}
}

export default Mine;
