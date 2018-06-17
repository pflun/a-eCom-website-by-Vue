<!-- Home.vue -->
<template>
	<div class="container">
		<home-header></home-header>
		<div class="content">
			<ul class="cont_ul">
				<listItem
					v-for="item in listItems"
					:price="item.price"
					:title="item.title"
					:sku="item.id"
					:image="item.img">
				</listItem>
			</ul>
		</div>
	</div>
</template>
<style>
	.container {
		max-width: 640px;
		margin: 0 auto;
		overflow-x: hidden;
	}
	.cont_ul {
		padding-top: 0.05rem;
		margin: 0 -0.12rem;
	}
	.cont_ul:after {
		content: "";
		display: block;
		width: 0;
		height: 0;
		clear: both;
	}
</style>
<script>
	// Import components
	import HomeHeader from '../components/HomeHeader.vue'
	import ListItem from '../components/List.vue'

	export default {
        data() {
            return {
                listItems: [],
            }
        },
        created() {
            this.$http.get('http://localhost:3000/posts/').then(function(data){
                console.log(data);
                this.listItems = data.body;
            });
        },
//        computed: { imagePath: function () { return '~assets/' + this.listItems.img + '.jpg' } },
		components: {
			HomeHeader,
			ListItem
		}
	}
</script>