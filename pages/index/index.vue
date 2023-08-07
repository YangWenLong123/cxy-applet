<!--
 * @Author: along
 * @Description:
 * @Date: 2023-08-06 18:16:50
 * @LastEditors: along
 * @LastEditTime: 2023-08-07 14:32:49
 * @FilePath: /cxy-applet/pages/index/index.vue
-->
<template>
  <view>
    <view class="title">
      ddd
      <text class="a">aa</text>
    </view>
  </view>
</template>

<script>
  import { getImageList } from '@/api/login.js';

  export default {
    data() {
      return {};
    },
    onShow() {
      this.testApi();
    },
    methods: {
      async testApi() {
        // const { list } = await getImageList();
        // console.log('result', list);
      },
    },
  };
</script>

<style lang="scss">
  @import './index.scss';
</style>
