module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true
	},
	"extends": [
		"airbnb-base",
		"standard-with-typescript"],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "ES2021",
		"sourceType": "module"
	},
	"rules": {
		"semi": ["error", {
			"omitLastInOneLineClassBody": true,
			"omitLastInOneLineBlock": true
		}],
		"prefer-const": "error",
		"linebreak-style": [
			"error",
			"windows"
		],

	},

}
