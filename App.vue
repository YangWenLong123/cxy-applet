<!--
 * @Author: along
 * @Description: app.vue
 * @Date: 2023-08-06 11:27:34
 * @LastEditors: along
 * @LastEditTime: 2023-08-07 14:06:25
 * @FilePath: /cxy-applet/App.vue
-->
<script>
	export default {
		onLaunch: function () {
			console.log('App Launch');
		},
		onShow: function () {
			console.log('App Show');
		},
		onHide: function () {
			console.log('App Hide');
		},
	};
</script>

<style lang="scss">
	@import '@/uview-ui/index.scss';
	@import url('@/static/css/global.css');
</style>
