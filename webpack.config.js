// Generated using webpack-cli http://github.com/webpack/webpack-cli
process.traceDeprecation = true;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports =
	{
		mode: 'none',
		entry: './src/index.js',
	target: 'web',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		// libraryTarget || output.library.type : "commonjs"

	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, './dist'),

		},

		watchFiles: [
			'./src/app/styles',
			'./src/app/ts',
			'./src/app/serve.ts',
			'./src/app/serwiceWorker/index.ts'
		],

		compress: true,
		historyApiFallback: true,
		open: true,
		// port: 8080
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				// exclude the minification
				collapseWhitespace: false
			}
		}),

		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map.[query]',
			exclude: path.resolve(__dirname, 'src/app'),
		}),

		new MiniCssExtractPlugin({
			filename: '[name].css'
		}), // { filename: '[name].css' }

			// Add your plugins here
			// Learn more about plugins from http://webpack.js.org/configuration/plugins/
		],
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/i,
					loader: 'ts-loader',
					include: [
						path.join(__dirname, 'src/frontend')
						// path.join(__dirname, '../serwiceWorker/src/some-best-cache/cacher/priority-data/index.ts')

					]
				},

				{
					test: /\.js$/i,
					include: [
						path.resolve(__dirname, 'src/frontend/ts')
					],
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { targets: "defaults" }]
							],
							plugins: [
								'@babel/plugin-transform-class-properties',
							],
							configFile: ".babelrc"
						}
					}],
				},
				{
					test: /\.s?[ac]ss$/i,
					include: [
						path.resolve(__dirname, './src/styles')

					],
					use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader", 'postcss-loader']

				},
				{
					test: /\.html$/i,
					loader: 'html-loader'
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'pic/[name][ext]'
					}
				}

				// Add your rules for custom modules here
				// Learn more about loaders from http://webpack.js.org/loaders/
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
			// alias: {

			// 	'@priority-data': path.resolve(__dirname, './src/app/serwiceWorker/src/some-best-cache/cacher/priority-data/index.ts'),
			// 	'@strategy-FetchThenCache': path.resolve(__dirname, './src/app/serwiceWorker/src/some-best-cache/fetch-then-cache/index.ts')
			// }
		},
		stats: {
			errorDetails: true
		}
	};
