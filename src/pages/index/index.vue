<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view>
      <text class="title">
        {{ title }}
      </text>
    </view>
    <view class="p">你好，世界</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello World',
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 200rpx;
    height: 200rpx;
    margin: 200rpx auto 50rpx;
  }
}

.p {
  color: #666;
}

.text-area {
  display: flex;
  justify-content: center;
  color: #333;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
