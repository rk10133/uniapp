<template>
	<view class="container">

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
				product: {},

			}
		},
		onLoad(e) {
			console.log(e)
			this.readProduct(e.pid)
		},
		methods: {
			readProduct(id) {
				productRequest.read({
					where: {
						and: {
							product_id: id
						}
					}
				}).then(r => {
					this.product = r.data[0];
				})
			}
		}
	}
</script>

<style>

</style>
