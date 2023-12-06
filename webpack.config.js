path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: './src/index.js',
	target: 'web',
	devServer: {
		static: {
			directory: path.resolve(__dirname, './dist'),

		},

		watchFiles: [

		],

		compress: true,
		historyApiFallback: true,
		open: true,
		// port: 8080
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
