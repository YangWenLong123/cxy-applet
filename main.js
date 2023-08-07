/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-06 12:38:37
 * @LastEditors: along
 * @LastEditTime: 2023-08-07 14:08:28
 * @FilePath: /cxy-applet/main.js
 */
import App from './App';
import uView from 'uview-ui';

import Vue from 'vue';

uni.$u.config.unit = 'rpx';

Vue.use(uView);

Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
	...App,
});
app.$mount();
