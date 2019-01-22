const path = require('path');

module.exports = {
	mode: 'production',
	watch: true,
	devtool: 'source-map',
	entry: './src/main.js',
	output:{
		path: path.resolve(__dirname, 'dist/'),
		filename: 'bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options:{
					'presets': ['@babel/preset-env']
				}
			}
		]
	}
}