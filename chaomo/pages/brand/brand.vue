<template>
	<view class="container">
		<view class="img">
			<image src="../../static/images/IMG_5073.png"></image>
		</view>
		<view class="content">
			<text class="text">近年来，在习近平主席与普京总统的战略引领下，中俄不断将高水平政治关系转化为经贸等领域的务实合作成果。
				　　在此次访问中，习近平主席同普京总统、梅德韦杰夫总理全面规划中俄务实友好合作，谋划顶层设计，勾勒具体部署，进一步推动两国发展战略紧密对接、发展利益深层融合、民心民意亲密交融。“新时代的中俄关系，要着力深化利益交融，拉紧共同利益纽带。”习近平主席在中俄建交70周年纪念大会上的讲话中这样说道。
				　　“深化”一词在《中华人民共和国和俄罗斯联邦关于发展新时代全面战略协作伙伴关系的联合声明》出现了20次，涵盖了中俄务实合作、人文交流等多个领域，为中俄更深层次的合作指明方向。
				　　孙壮志指出，中俄两国目前在国际合作方面的倡议都已进入实质性阶段。“一带一路”倡议与俄罗斯“大欧亚伙伴关系”等战略需要深化对接。
				　　他说，在经济领域，2018年中俄贸易额突破1000亿美元，但相对于两国体量而言还有非常大的开拓空间，未来中俄在基础设施领域能够有进一步合作。在民间交往领域，中俄通过一系列合作让双方民众认识到中俄关系的重要性，要有实实在在的获得感。中俄携手举办的教育、文化、体育等领域的活动正在进一步深化民众之间的交往，培养民众间的信任感。在安全领域，中俄应共同推进世界稳定，“在过去我们有很好的合作经验，在未来应当进一步完善全球治理体系变革，维护战略平衡，从而让两国关系走得更严更实。”
				　　李永全认为，中俄高度的政治互信对双边务实合作具有长远意义，能激发各领域深化合作的潜力，“回顾10年前，中国从俄罗斯进口超过3000万吨石油会被俄罗斯认为是‘影响本国能源战略安全’。但随着中俄双边互信的不断深入，去年俄罗斯已连续三年成为中国最大石油供应国，2018年向中国出口石油超过7000万吨，”李永全说，正是基于双边高度政治互信，中俄认识到合作的互惠互利，因此在能源领域的务实合作得以有效的深入发展。
				　　务实合作的不断深化，定会拉近中俄利益纽带，更好的造福两国和两国人民。“双方将继续开展共建“一带一路”同欧亚经济联盟对接，相互支持共建“一带一路”倡议和大欧亚伙伴关系倡议，协同促进地区一体化和区域经济融合发展。双方将持续推进战略性大项目，深挖新兴领域合作潜力，发挥地方经济互补优势，实现经贸合作提质增量，推动双边贸易额向2000亿美元迈进。”王毅介绍说，习近平主席与普京总统共同见证了经贸、能源、科技、航天、农业、教育等广泛领域近30份双边合作文件的签署，显示全方位、深层次、多领域的中俄互利合作格局正在形成。
			</text>
		</view>
		<view class="btn-container">
			<button class="join btn">加入我们</button>
			<button class="contact btn" @tap="toService">联系客服</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toService() {
				uni.switchTab({
					url: '../service/service'
				})
			}
		}
	}
</script>

<style scoped>
	.img image {
		width: 100%;
	}

	.content {
		padding-left: 20upx;
		padding-right: 20upx;
		padding-bottom: 375upx;
	}

	.text {
		font-size: 32upx;
		line-height: 25upx;
	}

	.btn-container {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 270upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: #FFFFFF;
		padding: 20upx 0;
		border-top: 1px solid rgba(0, 0, 0, .1);
	}

	.btn {
		width: 500upx;
	}

	.join {
		background-color: #81B79B;
		color: #FFFFFF;
	}

	.contact {
		color: #81B79B;
		border-color: #81B79B;
		background-color: #FFFFFF;
	}
</style>
