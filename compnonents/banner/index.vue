<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-06 12:50:45
 * @LastEditors: along
 * @LastEditTime: 2023-08-07 14:10:01
 * @FilePath: /cxy-applet/compnonents/banner/index.vue
-->
<template>
	<div>
		<div class="margin-wrap">
			<swiper
				class="swiper-style"
				autoplay="true"
				interval="3000"
				indicator-dots="true"
				circular="true"
			>
				<swiper-item v-for="item in banner" :key="item.id">
					<image :src="item.src" @click="details(item.url)"></image>
				</swiper-item>
			</swiper>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {};
		},
		props: {
			// 轮播图数据
			banner: {
				type: Array,
				default: [],
			},
		},
		onLoad() {},
		methods: {
			details(url) {
				uni.navigateTo({
					url: url,
				});
			},
		},
	};
</script>

<style>
	@import url('./style.css');
</style>
