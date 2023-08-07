<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-06 18:16:46
 * @LastEditors: along
 * @LastEditTime: 2023-08-07 14:09:45
 * @FilePath: /cxy-applet/pages/user/index.vue
-->
<template>
	<view>
		我的
		<u-button :customStyle="{ width: '200rpx' }" type="primary" @click="login()"> 登录 </u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			login() {
				uni.showLoading({
					title: '授权中',
				});

				uni.getUserProfile({
					lang: 'zh-CN',
					desc: '登录',
					success: (res) => {
						uni.hideLoading();
						try {
							console.log('授权信息', res);
							this.wxLogin(res.userInfo);
						} catch (e) {}
					},
					fail: (res) => {
						uni.hideLoading();
						uni.showToast({
							title: '授权失败',
							duration: 2000,
							icon: 'none',
						});
					},
				});
			},

			wxLogin(info) {
				uni.showLoading({
					title: '登录中',
				});

				uni.login({
					provider: 'weixin',
					success: (res) => {
						uni.hideLoading();
						console.log('登录成功', res);

						uni.getUserInfo({
							provider: 'weixin',
							lang: 'zh_CN',
							success: function (infoRes) {
								console.log('用户信息' + JSON.stringify(infoRes));
							},
						});
					},
				});
			},
		},
	};
</script>

<style></style>
