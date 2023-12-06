module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react'
	],
	plugins: [
		'@babel/syntax-dynamic-import',
		'@babel/plugin-transform-class-properties',
		[
			'module-resolver',
			{
				root: [
					'./'
				]
			}
		]
	]
};