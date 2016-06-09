import React from 'react';

var style = {
	color: "#c12e2a",
	fontWeight: 900
};
export default React.createClass({
	render() {
		return (
			<div>
				<h1 style={style}>{this.props.children}</h1>
				<hr/>
			</div>
		)
	}
});