import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Product from '@/components/Product'
import Solution from '@/components/Solution'
import Honor from '@/components/Honor'
import Material from '@/components/Material'
import Media from '@/components/Media'
import Visitor from '@/components/Visitor'
import Contact from '@/components/Contact'
import Instrument from '@/components/Product/Instrument'
import Accessory from '@/components/Product/Accessory'
import Reagent from '@/components/Product/Reagent'
import New from '@/components/Product/New'
import Brand from '@/components/Product/Brand'
import Sale from '@/components/Product/Sale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'home',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['../components/Main.vue'],resolve),
      children:[
        {
          path: '/',
          component: resolve => require (['../components/Home.vue'], resolve)
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/product',
          name:'product',
          component:resolve => require (['../components/Product.vue'], resolve),
          children:[
            {
              path:"/",
              redirect:"/instrument"
            },
            {
              path:'/instrument',
              name:'instrument',
              component:resolve => require (['../components/Product/Instrument.vue'], resolve)
            },
            {
              path:'/accessory',
              name:'accessory',
              component:Accessory
            },
            {
              path:'/reagent',
              name:'reagent',
              component:Reagent
            },
            {
              path:'/new',
              name:'new',
              component:New
            },
            {
              path:'/brand',
              name:'brand',
              component:Brand
            },
            {
              path:'/sale',
              name:'sale',
              component:Sale
            }
          ]
        },
        {
          path: '/solution',
          name:'solution',
          component:Solution
        },
        {
          path: '/honor',
          name:'honor',
          component:Honor
        },
        {
          path: '/material',
          name:'material',
          component:Material
        },
        {
          path: '/media',
          name:'media',
          component:Media
        },
        {
          path: '/visitor',
          name:'visitor',
          component:Visitor
        },
        {
          path: '/contact',
          name:'contact',
          component:Contact
        }
      ]
    }
  ]
})
