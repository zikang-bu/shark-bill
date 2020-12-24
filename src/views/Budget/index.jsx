import React, { Component } from 'react';
import './index.scss';
import { getBudgetInfo } from '@/api';
import { nowYear, nowMonth } from '@/utils/date';
import { Progress } from 'antd';
class Chart extends Component {
	state = {
		expend: 0,
		items: [],
		last: 0,
		sum: 0,
		id: 0,
	};

	async componentDidMount() {
		const { expend, items, last, sum, id } = await getBudgetInfo(nowYear() + '-' + nowMonth());
		this.setState({
			expend,
			items,
			last,
			sum,
			id,
		});
	}

	render() {
		const { expend, items, last, sum } = this.state;
		return (
			<div className="budget">
				<div className="budget_header">
					预算
					<div
						className="cancel"
						onClick={() => {
							window.history.back(-1);
						}}
					>
						取消
					</div>
				</div>
				<div className="budget_box">
					<div className="box-header">
						<span>{nowMonth()}月总预算</span>
						<span>编辑</span>
					</div>
					<div className="box-detail">
						<div className="chart">
							<Progress type="circle" percent={parseInt((last / sum) * 100)} format={(percent) => `剩余${percent}%`} />
						</div>
						<div className="text">
							<div className="budget-last">
								<span>剩余预算：</span>
								<span>{last}</span>
							</div>
							<div>
								<span>本月预算：</span>
								<span>{sum}</span>
							</div>
							<div>
								<span>本月支出：</span>
								<span>{expend}</span>
							</div>
						</div>
					</div>
				</div>
				<div className="budget_division"></div>
				<div className="budget_category">
					{items.map((item) => (
						<div key={item.id} className="item-box">
							<div className="item-header">
								<span>{item.categoryName}</span>
								<span>编辑</span>
							</div>
							<div className="item-detail">
								<div className="chart">
									<Progress
										type="circle"
										percent={parseInt(((item.sum - item.expend) / item.sum) * 100)}
										format={(percent) => `剩余${percent}%`}
									/>
								</div>
								<div className="text">
									<div className="budget-last">
										<span>剩余预算：</span>
										<span>{item.sum - item.expend}</span>
									</div>
									<div>
										<span>本月预算：</span>
										<span>{item.sum}</span>
									</div>
									<div>
										<span>本月支出：</span>
										<span>{item.expend}</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Chart;
