<template>
	<div class="load"></div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.load {
		display: inline-block;
		width: 16px;
		height: 16px;
		color: inherit;
		vertical-align: middle;
		pointer-events: none;
		border: 3px solid currentcolor;
		border-bottom-color: transparent;
		border-radius: 50%;
		-webkit-animation: 1s load linear infinite;
		animation: 1s load linear infinite;
		position: relative;
		color: #81b79b;
		font-size: 16px;
	}

	@-webkit-keyframes load {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes load {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
</style>
