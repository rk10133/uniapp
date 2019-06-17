<template>
	<view class="container">
		<view class="wrap">
			<view class="img">
				<image :src="product.img"></image>
			</view>
			<view class="prev">
				<view class="top">
					<view class="title">{{product.title}}</view>
					<view class="sales">月销
						<view class="num">{{product.sales}}</view>
					</view>
				</view>
				<view class="price">{{product.price}}</view>
				<view class="intro" v-if="product.intro">{{product.intro}}</view>
				<view class="bottom">
					<view class="item" v-for="(it,index) in product.effect" :key="index">
						<image class="icon" src="../../static/images/gou.png"></image>{{it}}
					</view>
				</view>
			</view>
			<view class="detail">
				<view class="title">服务介绍</view>
				<text class="text" decode="true">{{handleText(product.detail)}}</text>
			</view>
		</view>
		<view class="tabbar">
			<view class="service">
				<image class="icon" src="../../static/images/icons/service_active.png"></image>
				<view class="text">客服</view>
			</view>
			<view class="three">
				<view class="num">￥{{product.price*0.87}}</view>
				<view class="text">三人拼单</view>
			</view>
			<view class="single">
				<view class="num">￥{{product.price}}</view>
				<view class="text" @tap.stop="createOrder">单人预约</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		ProductRequest
	} from "../../models/product.js"
	const productRequest = new ProductRequest()
	export default {
		data() {
			return {
				product: {}
			}
		},
		onLoad(e) {
			this.readProduct(e.id)
		},
		methods: {
			readProduct(id) {
				uni.showLoading({
					title: '加载中'
				});
				productRequest.read({
					where: {
						and: {
							product_id: id
						}
					}
				}).then(r => {
					this.product = r.data[0];
					uni.hideLoading()
				}).catch(e => {
					uni.hideLoading()
				})
			},
			handleText(text) {
				if (!text)
					return
				let reg = new RegExp('\\\\n', 'g')
				return text.replace(reg, '\n')
			},
			createOrder(e) {
				uni.navigateTo({
					url: '../order/order?orderid=' + Date.now() + '&pid=' + this.product.id
				})
			}
		}
	}
</script>

<style scoped>
	.wrap {
		padding-bottom: 100upx;
	}

	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100upx;
		background-color: #fff;
	}

	.img image {
		width: 100%;
		height: 350upx;
	}

	.prev {
		padding-bottom: 10upx;
		background-color: #eee;
	}

	.top,
	.price,
	.intro,
	.bottom {
		background-color: #fff;
		padding-left: 20upx;
		padding-right: 20upx;
	}

	.top {
		padding-top: 10upx;
	}

	.top .title,
	.top .sales {
		display: inline-block;
		box-sizing: border-box;
	}

	.top .title {
		width: 70%;
		font-size: 32upx
	}

	.top .sales {
		width: 30%;
		text-align: right;
		color: #ccc;
		font-size: 25upx;
	}

	.sales .num {
		padding-left: 20upx;
		display: inline-block;

	}

	.price {
		padding-top: 20upx;
		padding-bottom: 20upx;
	}

	.price:before {
		content: '￥';
	}

	.intro {
		padding-bottom: 20upx;
		font-size: 27upx;
		color: #999;
	}

	.bottom {
		display: flex;
		justify-content: center;
		padding-bottom: 30upx;
	}

	.bottom .item {
		flex: 1;
		font-size: 27upx;
		line-height: 27upx;
		display: flex;
		align-items: center;
	}

	.icon {
		width: 30upx;
		height: 30upx;
		padding-right: 10upx;
	}

	.detail {
		padding: 20upx;
	}

	.detail .title {
		color: #81B79B;
		font-size: 32upx;
		padding-bottom: 20upx;
	}

	.detail .text {
		font-size: 29upx;
		line-height: 40upx;
	}

	.tabbar .service,
	.tabbar .three,
	.tabbar .single {
		display: inline-block;
		box-sizing: border-box;
		height: 100%;
		text-align: center;
	}

	.tabbar .service {
		width: 20%;
		color: #81B79B;
	}

	.service .icon {
		width: 40upx;
		height: 40upx;
		padding-right: 0;
	}

	.service .text {
		line-height: 20upx;
	}

	.tabbar .three,
	.tabbar .single {
		width: 40%;
	}

	.tabbar .three {
		background-color: #e1eee8;
		color: #81B79B;
	}

	.tabbar .single {
		background-color: #81B79B;
		color: #FFFFFF;
	}

	.tabbar .text {
		font-size: 25upx;
	}

	.tabbar .num {
		font-size: 32upx
	}

	.tabbar .service .icon,
	.tabbar .service .text,
	.tabbar .three .text,
	.tabbar .three .num,
	.tabbar .single .text,
	.tabbar .single .num {
		line-height: 50upx;
	}
</style>
