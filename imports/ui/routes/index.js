import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        component: () => import('../page/Home.vue'),
    },
    {
        path: "/user",
        component: () => import('../page/User.vue'),
        name:"User"
    },
    {
        path: "/item",
        component: () => import('../page/Item.vue'),
        name:"Item"
    },
    {
        path: "/customer",
        component: () => import('../page/Customer.vue'),
        name:"Customer"
    },
    {
        path: "/category",
        component: () => import('../page/Category.vue'),
        name:"Category"
    },
    {
        path: "/supplier",
        component: () => import('../page/Supplier.vue'),
        name: "Supplier"
    },
    {
        path: "/purchase",
        component: () => import('../page/Purchase.vue'),
        name: "Purchase"
    },
    {
        path:"/sale",
        component: () => import('../page/Sale.vue'),
        name: 'Sale'
    },
    {
        path:"/import",
        component: () => import('../components/Import.vue'),
        name: 'import'
    },
    {
        path:"/export",
        component: () => import('../page/Export.vue'),
        name: 'Export'
    },
    {
        path:"/login",
        component: () => import('../page/Login.vue'),
        name: 'Login'
    },
    {
        path:"/Test",
        component: () => import('../page/test.vue'),
        name:"TEST"
    }
]

const router = new VueRouter({
    routes,
})

export default router;