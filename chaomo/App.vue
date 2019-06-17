<script>
	export default {
		onLaunch() {
			uni.login({
				success: r => {
					console.log(r.code)
					if (r.code) {
						let url =
							'https://api.weixin.qq.com/sns/jscode2session?appid=wx111f77188e0db4b1&secret=a9230bf26fdc165712ffb01072f34879' +
							'&js_code=' + r.code + '&grant_type=authorization_code'
						uni.request({
							url,
							data: {},
							method: 'POST',
							success: r => {
								console.log(r)
							}
						});
					} else {
						uni.showToast({
							title: '登陆失败',
							icon: 'none'
						})
					}
				}
			});
		}
	}
</script>

<style>
</style>
