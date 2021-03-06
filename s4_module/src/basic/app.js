import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/Header';
import BootstrapButton from './BootstrapButton';

const appInstance = (
	<div>
		<Header>Bootstrap按钮</Header>
		<BootstrapButton/>
		<hr/>
	</div>
);
ReactDOM.render(
	appInstance,
	document.getElementById('app-container')
);