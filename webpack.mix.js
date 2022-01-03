const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	.js('resources/ts/app.ts', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.webpackConfig({
		module: {
			rules: [
				{
					test: /\.ts?$/,
					loader: 'ts-loader',
					exclude: '/node_modules/',
				},
			],
		},
		resolve: {
			extensions: ['*', '.js', '.ts']
		},
	})
	.sourceMaps();
