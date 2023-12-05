process.traceDeprecation = true;
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
	// Set the mode to development or production
	mode: process.env.NODE_ENV,

	plugins: [
		// Only update what has changed on hot reload
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin({
			files: [
				path.resolve(__dirname, 'src/app/backend/src'),
				path.resolve(__dirname, 'src/frontend/')

			]
		}),
	]
});
