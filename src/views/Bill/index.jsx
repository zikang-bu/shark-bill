import React, { Component } from 'react';
import { getCategoryItems, setBookItem } from '@api';
import './index.scss';
import IconFont from '../../components/SvgIcon';
import { DatePicker } from 'antd';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

const dateFormat = 'YYYY-MM-DD';
class Chart extends Component {
	state = {
		type: 1,
		categorysExpend: [],
		categorysIncome: [],
		count: '0',
		date: moment(new Date()).format(dateFormat),
		panelShow: false,
		category: 0,
		remarks: '',
	};

	fetchData = async () => {
		const categorys = await getCategoryItems();
		this.setState({
			categorysExpend: categorys.filter((c) => c.type === 1),
			categorysIncome: categorys.filter((c) => c.type === 2),
		});
	};

	categoryRender = () => {
		const { type, categorysExpend, categorysIncome, category } = this.state;
		const current = type === 1 ? categorysExpend : categorysIncome;
		return (
			<div className="category">
				{current.map((item, index) => (
					<div key={index} className="category_item">
						<div
							className={['category_icon', category === item.id ? 'category_selected' : null].join(' ')}
							onClick={() => this.categoryClick(item)}
						>
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
		return arr.map((item, i) => (
			<li
				key={i}
				onClick={() => {
					this.setCount(item);
				}}
			>
				{item}
			</li>
		));
	};

	typeChange = (type) => {
		this.setState({
			panelShow: false,
			category: 0,
			count: '0',
			date: moment(new Date()).format(dateFormat),
			type,
		});
	};

	categoryClick = (item) => {
		this.setState({
			panelShow: true,
			category: item.id,
		});
	};

	dateChange = (date, dateString) => {
		this.setState({ date: dateString });
	};

	handleInputChange = (e) => {
		console.log(e.target.value); //获取修改后的值
		this.setState({
			remarks: e.target.value,
		});
	};

	deleteCount = () => {
		const len = this.state.count.length;
		const count = this.state.count.substring(0, len - 1);
		this.setState({ count: count ? count : '0' });
	};

	setCount = (num) => {
		if (this.state.count === '0' && num !== '.') {
			this.setState({ count: num.toString() });
		} else {
			const result = this.state.count + num;
			// eslint-disable-next-line
			const reg = /(^[1-9][0-9]*|0)([\.][0-9]{0,2})?$/;
			const flag = reg.test(result);
			if (flag) {
				this.setState({ count: result });
			}
		}
	};

	submit = async () => {
		const { date, category, count, type, remarks } = this.state;
		await setBookItem(date, category, type, count, remarks);
		this.props.history.push({
			pathname: '/',
		});
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const { type, count, date, panelShow, remarks } = this.state;
		let panel = null;
		if (panelShow) {
			panel = (
				<div className="bill_count">
					<div className="message">
						<div className="remark">
							备注：
							<input
								value={remarks}
								onChange={(event) => {
									this.handleInputChange(event);
								}}
							/>
						</div>
						<div className="count">{count}</div>
					</div>
					<ul>{this.numberRender()}</ul>
					<div className="number-box">
						<div
							onClick={() => {
								this.setCount('.');
							}}
						>
							.
						</div>
						<div
							onClick={() => {
								this.setCount('0');
							}}
						>
							0
						</div>
						<div
							onClick={() => {
								this.deleteCount();
							}}
						>
							×
						</div>
					</div>
					<div className="bottom">
						<div>
							<DatePicker
								defaultValue={moment(date, dateFormat)}
								format={dateFormat}
								onChange={(...args) => this.dateChange(...args)}
								className="date-box"
							/>
						</div>
						<div className="right" onClick={() => this.submit()}>
							完成
						</div>
					</div>
				</div>
			);
		}
		return (
			<div className="bill">
				<div className="bill_header">
					<div className={type === 1 ? 'current' : null} onClick={() => this.typeChange(1)}>
						支出
					</div>
					<div className={type === 2 ? 'current' : null} onClick={() => this.typeChange(2)}>
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
				{panel}
			</div>
		);
	}
}

export default withRouter(Chart);
