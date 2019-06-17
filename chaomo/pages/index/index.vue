<template>
	<view class="container">
		<view class="banner">
			<swiper class="swiper" :indicator-dots="indicatorDots" indicator-active-color="#fff" :autoplay="autoplay" :interval="interval"
			 :duration="duration">
				<swiper-item v-for="it in bannerList" :key="it.id">
					<image class="banner-item" :src="it.url"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="product-list">
			<view class="title">服务项目</view>
			<view class="product-item" v-for="it in productList" :key="it.id" @tap="bindTap" :data-pid="it.id">
				<image class="item-img" :src="it.img"></image>
				<text class="item-title">{{it.title}}</text>
				<view class="mask"></view>
			</view>
			<Loading class="loading" v-if="showBottomLoading"></Loading>
			<view class="no-more" v-if="noMore">— 我是有底线的 —</view>
		</view>
	</view>
</template>

<script>
	import {
		ProductRequest
	} from "../../models/product.js"
	const productRequest = new ProductRequest()
	import Loading from "../../components/loading.vue"
	export default {
		components: {
			Loading
		},
		data() {
			return {
				//swiper配置开始
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				//swiper配置结束
				limit: 3,
				page: 1,
				noMore: false,
				showBottomLoading: false,
				last_page: null,
				productList: [],
				bannerList: [{
					id: 1,
					url: '../../static/images/banner/banner_1.png'
				}, {
					id: 2,
					url: '../../static/images/banner/banner_2.png'
				}, {
					id: 3,
					url: '../../static/images/banner/banner_3.png'
				}]
			}
		},
		onLoad() {
			this.readProduct(1)
		},
		onReachBottom() {
			if (this.last_page > this.page) {
				let page = this.page + 1;
				this.readProduct(page)
			} else {
				this.noMore = true;
				return
			}
		},
		methods: {
			readProduct(page) {
				this.showBottomLoading = true;
				productRequest.read({
					limit: this.limit,
					page
				}).then(r => {
					this.showBottomLoading = false;
					this.productList = [...this.productList, ...r.data];
					this.last_page = r.last_page;
					this.page = r.current_page
				}).catch(() => {
					this.showBottomLoading = false
				})
			},
			bindTap(e) {
				const pid = e.currentTarget.dataset.pid;
				uni.navigateTo({
					url: '../product/product?id=' + pid
				})
			}
		}
	}
</script>

<style scoped>
	.banner .swiper,
	.product-item {
		width: 750upx;
	}

	.banner-item {
		width: 100%;
		height: 100%;
	}


	.product-list .title {
		padding: 20upx 0;
		text-align: center;
		color: #81b79b;
		font-size: 32upx;
	}

	.product-item {
		position: relative;
		margin-bottom: 10upx;
		height: 100%;
	}

	.product-item .item-img {
		width: 100%;
		height: 320upx;
	}

	.product-item .item-title {
		position: absolute;
		bottom: 20upx;
		left: 20upx;
		color: #fff;
		font-size: 30upx;
		z-index: 1;
	}

	.product-item .mask {
		position: absolute;
		bottom: 10upx;
		width: 100%;
		height: 80upx;
		background: linear-gradient(to bottom, rgba(0, 0, 0, .01) 0%, rgba(0, 0, 0, .6) 100%);
	}

	.loading {
		padding-bottom: 20upx;
		display: flex;
		justify-content: center;
	}

	.no-more {
		text-align: center;
		padding-bottom: 20upx;
		font-size: 25upx;
		color: #ccc;
	}
</style>
