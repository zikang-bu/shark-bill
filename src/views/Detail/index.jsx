import React, { Component, Fragment } from 'react';
import './index.scss';
import { ContainerOutlined, WalletOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { getBookItems } from '@api';
import { dateFormat, nowYear, nowMonth } from '@/utils/date';
import { withRouter } from 'react-router-dom';

class Detail extends Component {
	state = { details: [], expend: 0, income: 0 };

	detailRender = () => {
		const { details } = this.state;
		return details.map((d, index) => {
			return (
				<Fragment key={index}>
					<div className="detail-item detail-date">
						<div>
							{d.date} {d.week}
						</div>
						<div>
							{d.income > 0 ? `收入:${d.income}` : ''}
							{d.expend > 0 ? `支出:${d.expend}` : ''}
						</div>
					</div>
					<div>
						{d.items.map((i, index) => (
							<div className="detail-item" key={index}>
								<span>{i.remarks ? i.remarks : i.category}</span>
								<span>{i.amount}</span>
							</div>
						))}
					</div>
				</Fragment>
			);
		});
	};

	fetchData = async () => {
		const date = dateFormat(new Date(), 'YYYY-MM');
		const { items, expend, income } = await getBookItems(date);
		this.setState({ details: items, expend, income });
	};

	handleBudget = () => {
		this.props.history.push({
			pathname: '/budget',
		});
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const { expend, income } = this.state;
		const year = nowYear();
		const month = nowMonth();
		return (
			<div>
				<div className="detail-top">
					<div className="title">鲸鱼记账</div>
					<div className="content">
						<div className="date">
							<div>{year}年</div>
							<div>{month}月</div>
						</div>
						<div className="bill-item">
							<div>收入</div>
							<div>{income}</div>
						</div>
						<div className="bill-item">
							<div>支出</div>
							<div>{expend}</div>
						</div>
					</div>
					<div className="apps">
						<div>
							<ContainerOutlined />
							<div>账单</div>
						</div>
						<div onClick={() => this.handleBudget()}>
							<WalletOutlined />
							<div>预算</div>
						</div>
						<div>
							<DollarCircleOutlined />
							<div>资产管家</div>
						</div>
					</div>
				</div>
				<div className="detail-items">{this.detailRender()}</div>
			</div>
		);
	}
}

export default withRouter(Detail);
