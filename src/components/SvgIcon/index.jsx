import classNames from 'classnames';
import * as React from 'react';
import './index.scss';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({ scriptUrl: '//at.alicdn.com/t/font_2251948_3gdhmsyhjml.js' });

const SvgIcon = (props) => {
	const { className, type, ...etc } = props;
	return <IconFont {...etc} className={classNames('SvgIcon', className)} type={type} />;
};

export default SvgIcon;
