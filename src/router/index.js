import Vue from "vue"
import VueRouter from "vue-router"
import router from "../../../tabbar/src/router"

Vue.use(VueRouter)

const Home = () => import("@/views/home/Home")
const Category = () => import("@/views/category/Category")
const Profile = () => import("@/views/profile/Profile")
const Cart = () => import("@/views/cart/Cart")

const routes = [{
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: history
})

export default router
