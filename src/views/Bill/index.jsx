import React, { Component } from 'react';
import { getCategoryItems, setBookItem } from '@api';
import './index.scss';
import IconFont from '../../components/SvgIcon';

class Chart extends Component {
	state = {
		type: 1,
		categorysExpend: [],
		categorysIncome: [],
		count: 0,
	};

	fetchData = async () => {
		const categorys = await getCategoryItems();
		this.setState({
			categorysExpend: categorys.filter((c) => c.type === 1),
			categorysIncome: categorys.filter((c) => c.type === 2),
		});
	};

	categoryRender = () => {
		const { type, categorysExpend, categorysIncome } = this.state;
		const current = type === 1 ? categorysExpend : categorysIncome;
		return (
			<div className="category">
				{current.map((item, index) => (
					<div key={index} className="category_item">
						<div className="category_icon">
							<IconFont type={item.icon} />
						</div>
						{item.name}
					</div>
				))}
			</div>
		);
	};

	numberRender = () => {
		let arr = [];
		for (let index = 9; index > 0; index--) {
			arr.push(index);
		}
		return arr.map((item, i) => <li key={i}>{item}</li>);
	};

	addBill = async () => {
		await setBookItem();
	};

	setCount = (num) => {
		const reg = /^[1-9][0-9]*([\.][0-9]{1,2})?$/;
		const flag = reg.test(this.state.count);
		if (flag) {
			this.setState({ count: this.state.count + num });
		}
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const { type, count } = this.state;
		return (
			<div className="bill">
				<div className="bill_header">
					<div
						className={type === 1 ? 'current' : null}
						onClick={() => {
							this.setState({ type: 1 });
						}}
					>
						支出
					</div>
					<div
						className={type === 2 ? 'current' : null}
						onClick={() => {
							this.setState({ type: 2 });
						}}
					>
						收入
					</div>
					<div
						className="cancel"
						onClick={() => {
							window.history.back(-1);
						}}
					>
						取消
					</div>
				</div>
				<div>{this.categoryRender()}</div>
				<div className="bill_count">
					<div className="message">
						<div className="remark">
							备注：
							<input />
						</div>
						<div className="count">{count}</div>
					</div>
					<div className="number-box">
						<ul>{this.numberRender()}</ul>
						<div className="right">
							<div>今天</div>
							<div>+</div>
							<div>-</div>
						</div>
					</div>
					<div className="bottom">
						<div className="left">
							<div>.</div>
							<div>0</div>
							<div>×</div>
						</div>
						<div className="right">完成</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Chart;
