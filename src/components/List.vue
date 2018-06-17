<!-- List.vue -->
<template>
		<el-col :span="12">
			<el-col :span="24" class="sec_li">
				<router-link :to="{path: '/detail/' + sku}" class="lp_li_a">
					<div class="lp_li_imgWrap">
						<img :src="'/static/img/'+image" alt="">
					</div>
					<p class="lp_li_name">{{ title }}</p>
					<p class="lp_li_price">${{ price }}</p>
				</router-link>
			</el-col>
		</el-col>
</template>

<style lang="scss">
	@import '../css/list.css';
</style>

<script>
	export default {
		props: ['price', 'title', 'image', 'sku'],
	}
</script>