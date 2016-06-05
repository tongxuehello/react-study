const path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry : {
		app : './src/js/app.js'
	},
	output : {
		path : __dirname + "/build/js/",
		filename : '[name].entry.js'
	},
	resolve : {
		extensions : ['', '.js', '.jsx']
	},
	module : {
		loaders : [
		
		
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
		/*
		{
				test : /\.js$/,
				exclude : path.resolve(__dirname, 'node_modules'), // 相对于运行Node.js程序的工作目录
				include : [path.join(__dirname, 'src')],
				loader : 'babel-loader!jsx-loader?harmony'
			}, */{
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
