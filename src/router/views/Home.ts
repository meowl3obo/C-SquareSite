import { RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue";

export const home: RouteRecordRaw = {
    path: "/",
    component: Home,
    meta: {
        title: "C-Square 線上商城"
    }
}