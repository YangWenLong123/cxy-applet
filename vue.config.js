/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-06 11:27:35
 * @LastEditors: along
 * @LastEditTime: 2023-08-07 13:40:01
 * @FilePath: /krafthein-mp-api/vue.config.js
 */
const path = require('path');
function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	devServer: {
		// port: 3300,
		// open: true,
		// proxy: {
		// 	'/conner': {
		// 		target: 'https://api.it120.cc',
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			'^/conner': '/conner'
		// 		}
		// 	}
		// }
	},

	// configureWebpack: {
	//   resolve: {
	//     alias: {
	//       '@': resolve('pages')
	//     }
	//   },
	// },
};
