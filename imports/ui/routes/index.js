import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        component: () => import('../page/Home.vue'),
        name:"Home",
    },

    {
        path: "/Home",
        component: () => import('../page/Home.vue'),
        name:'Home'
    },
    {
        path: "/User",
        component: () => import('../page/User.vue'),
        name:"User"
    },
    {
        path: "/Check",
        component: () => import('../page/Check.vue'),
        name:"Check"
    },
    {
        path: "/Customer",
        component: () => import('../page/Customer.vue'),
        name:"Customer"
    },
]

const router = new VueRouter({
    routes,
})

export default router;