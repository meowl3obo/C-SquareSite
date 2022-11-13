import { RouteRecordRaw } from 'vue-router'
import Product from "@/views/Product.vue";

export const product: RouteRecordRaw = {
  path: "/product",
  component: Product,
  children: [
    {
      path: "/product/:main",
      component: () => import("@/views/product/ProductList.vue")
    },
    {
      path: "/product/:main/:child",
      component: () => import("@/views/product/ProductList.vue")
    },
    {
      path: "/product/:main/:child/:id",
      component: () => import("@/views/product/ProductIntro.vue")
    }
  ],
  meta: {
    title: "C-Squared 線上商城"
  }
}