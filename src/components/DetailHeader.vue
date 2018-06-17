<!-- DetailHeader.vue -->
<template>
	<el-row>
		<el-col :span="24" class="header">
		<div class="header_inner flexWrap">
			<div 
				id="header_btn_nav" 
				class="header_btn header_btn_back"
				v-on:click="goBack"
				>Back</div>
			<div class="header_cont flex">Item</div>
			<div class="header_btn header_btn_cart"></div>
		</div>
		</el-col>
	</el-row>
</template>

<style lang="scss">
	@import '../css/detailheader.css';
</style>

<script>
	export default {
		methods: {
			goBack(){
				window.history.back();
			}
		}
	}
</script>