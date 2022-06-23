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
        path: "/User",
        component: () => import('../page/User.vue'),
        name:"User"
    },
    {
        path: "/Item",
        component: () => import('../page/Item.vue'),
        name:"Item"
    },
    {
        path: "/Customer",
        component: () => import('../page/Customer.vue'),
        name:"Customer"
    },
    {
        path: "/Category",
        component: () => import('../page/Category.vue'),
        name:"Category"
    },
    {
        path: "/Supplier",
        component: () => import('../page/Supplier.vue'),
        name: "Supplier"
    }
]

const router = new VueRouter({
    routes,
})

export default router;