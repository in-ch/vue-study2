import Vue from 'vue';
import Router from "vue-router";

import HomeLayout from '@/layout/HomeLayout.vue';


Vue.use(Router);

export const constantRoutes = [
    {
        path: '/',
        component: HomeLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("@/views/home/Home")
            },
        ]
    }
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export default router;
