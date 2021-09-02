// import {createRouter , createWebHistory} from 'vue-router'
import VueRouter from 'vue-router'
import About from "@/views/About";
import Home from "@/views/Home";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path : '/about',
        name:'About',
        component: About
    }
]

// const router = createRouter({
//     history:createWebHistory(process.env.BASE_URL),
//     routes
// })
const router = new VueRouter({
  routes
})

export default router