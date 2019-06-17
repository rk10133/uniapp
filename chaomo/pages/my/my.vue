<template>
	<view class="container">
		<view class="user">
			<image class="img" src="../../static/images/my.png"></image>
			<open-data type="userAvatarUrl" class="avatar"></open-data>
		</view>
		<view class="wrap">
			<view class="card">
				<view class="item">个人中心</view>
				<view class="item">我要办卡</view>
				<view class="item">我的会员卡</view>
			</view>
			<view class="bottom">
				<view class="item">热门活动</view>
				<view class="item">我的消息</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {}
</script>

<style scoped>
	.user {
		position: relative;
	}

	.user .img {
		width: 100%;
	}

	.avatar {
		width: 150upx;
		height: 150upx;
		border-radius: 50%;
		overflow: hidden;
		position: absolute;
		top: 100upx;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	.user,
	.wrap {
		background-color: rgba(0, 0, 0, .05);
	}

	.wrap {
		padding: 30upx;
	}

	.wrap .card,
	.wrap .bottom {
		background-color: #fff;
		border-radius: 20upx;
	}

	.wrap .card {
		margin-bottom: 30upx;
	}

	.item {
		padding: 40upx;
		font-size: 32upx;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.wrap .card .item:last-child,
	.wrap .bottom .item:last-child {
		border-bottom: 0;
	}
</style>
