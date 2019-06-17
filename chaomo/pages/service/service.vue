<template>
	<view class="container">
		<view class="img-container">
			<image class="img" src="../../static/images/service.png"></image>
		</view>
		<view class="btn-container">
			<button class="copy btn" @tap="copyText">复制客服微信号</button>
			<button class="phone btn" @tap="call">直接拨打电话</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			copyText() {
				uni.setClipboardData({
					data: '富强民主文明和谐',
					success: () => {
						wx.showToast({
							title: '复制成功'
						})
					}
				})
			},
			call() {
				uni.makePhoneCall({
					phoneNumber: '1234567890'
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		position: relative;
	}

	.img-container {
		background-color: #81B79B;
	}

	.img {
		width: 100%;
		height: 1100upx;
	}

	.btn-container {
		position: absolute;
		bottom: 160upx;
		left: 0;
		right: 0;
		height: 260upx;
		width: 400upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: #FFFFFF;
		margin: 0 auto;
	}

	.btn-container .btn {
		width: 100%;
		border-radius: 50upx;
	}

	.copy {
		background-color: #81B79B;
		color: #fff;
	}

	.phone {
		background-color: #e1eee8;
		color: #81B79B;
	}
</style>
