import React, { Component } from 'react';
import './index.css';
import { AccountBookOutlined, LineChartOutlined, GlobalOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { componentsRoutes } from '../router/routes';
import renderRoutes from '../router/renderRoutes';
import { withRouter } from 'react-router-dom';

const navs = [
	{ name: '明细', render: <AccountBookOutlined />, path: '/', key: 'detail' },
	{ name: '图表', render: <LineChartOutlined />, path: '/main/chart', key: 'chart' },
	{ name: '记账', render: <PlusOutlined />, path: '/bill', key: 'bill' },
	{ name: '社区', render: <GlobalOutlined />, path: '/main/community', key: 'community' },
	{ name: '我的', render: <UserOutlined />, path: '/main/mine', key: 'mine' },
];

class MyLayout extends Component {
	state = {
		current: 'detail',
	};

	handleClick = (nav) => {
		this.setState({ current: nav.key });
		this.props.history.push({
			pathname: nav.path,
		});
	};

	componentDidMount() {
		const pathname = this.props.history.location.pathname;
		const nav = navs.find((nav) => nav.path === pathname);
		this.setState({
			current: nav.key,
		});
	}

	render() {
		const { current } = this.state;
		return (
			<div>
				<div>{renderRoutes(componentsRoutes)}</div>
				<div className="nav-bottom">
					{navs.map((nav) => {
						return (
							<div
								className={['nav-item', current === nav.key ? 'nav-current' : null].join(' ')}
								onClick={() => this.handleClick(nav)}
								key={nav.key}
							>
								{nav.render}
								<div>{nav.name}</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default withRouter(MyLayout);
