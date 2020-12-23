import React, { Component } from 'react';
import './index.scss';

class Chart extends Component {
	state = {};
	render() {
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
			</div>
		);
	}
}

export default Chart;
