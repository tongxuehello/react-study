const path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry : {
		basic : './src/basic/app.js',
		thinking_in_react : './src/thinking_in_react/app.js',
		thinking_in_react_inverse_data_flow : './src/thinking_in_react_inverse_data_flow/app.js',
		react_with_redux : './src/react_with_redux/index.js'
	},
	output : {
		path : __dirname + "/build/js/",
		filename : '[name].js'
	},
	resolve : {
		extensions : ['', '.js', '.jsx']
	},
	module : {
		loaders : [
			{
				test : /.js?$/,
				loader : 'babel-loader',
				exclude : /node_modules/,
				query : {
					presets : ['es2015', 'react']
				}
			},
			{
				test : /\.less/,
				include : [path.join(__dirname, 'css')],
				loader : 'style-loader!css-loader!less-loader'
			}, {
				test : /\.(css)$/,
				include : [path.join(__dirname, 'css')],
				loader : 'style-loader!css-loader'
			}, {
				test : /\.(png|jpg)$/,
				loader : 'url-loader?limit=8192'
			}
		]
	},
	plugins : [commonsPlugin]
};
