/**
 * Created by 37341 on 10/10/17.
 */
import Home from './pages/Home.vue'
import singleDetail from './pages/singleDetail.vue'

export default[
    {
        path: '/',
        component: Home
    },
    {
        path: '/detail/:id',
        component: singleDetail
    },
]