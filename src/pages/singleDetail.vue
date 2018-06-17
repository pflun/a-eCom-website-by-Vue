<template>
    <div class="detail">
        <div class="container">
        <detail-header></detail-header>
        <el-row type="flex" justify="center" class="detail-item">
            <el-col :span="20">
                <img :src="'/static/img/'+detailItems.img" alt="">
                <div class="block">
                    <span class="demonstration">Rate</span>
                    <el-rate v-model="value1"></el-rate>
                </div>
                <p>{{ detailItems.price }}</p>
                <p>{{ detailItems.body }}</p>
            </el-col>
        </el-row>
        </div>
    </div>
</template>
<style scoped>
    .container {
        max-width: 640px;
        margin: 0 auto;
        overflow-x: hidden;
    }
    .detail-item {
        background-color: white;
    }
    .detail {
        /*padding: 0.24rem;*/
        font-size: 12px;
    }
    img {
        display: block;
        width: 80%;
        margin: 0 auto 0.2rem;
    }
    p {
        font-size: 14px;
        line-height: 0.5rem;
        text-align: justify;
        padding-bottom: 0.24rem;
    }
</style>
<script>
    import DetailHeader from '../components/DetailHeader.vue'

    export default {
        components: {
            DetailHeader
        },
        data() {
            return {
                id: this.$route.params.id,
                detailItems: {}
            }
        },
        created() {
            this.$http.get('http://localhost:3000/posts/' + this.id).then(function(data){
                console.log(data);
                this.detailItems = data.body;
            });
        }
    }
</script>