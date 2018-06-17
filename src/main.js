import Vue from 'vue'

import VueRouter from 'vue-router'

import Routes from './routes'

import VueResource from 'vue-resource'

import ElementUI from 'element-ui'

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.use(ElementUI)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    data(){
        return {
            transitionName: 'slide'
        }
    },
    router: router,
    watch: {
        '$route' (to, from){
            const toDepth = to.path.substring(0, to.path.length-2).split('/').length
            const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
        }
    },
})
