import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../components/Inicio.vue'
import Publcacion from '../components/Post.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/Index',
        name: 'Inicio',
        component: inicio,
        indexed: true,
    },
    {
        path: '/Post',
        name: 'Publcacion',
        component: Publcacion,
        indexed: true,
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router