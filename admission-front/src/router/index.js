import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '../components/Home'
import Form from '../components/Form'
import AllDepIntro from '../components/AllDepIntro'
import Display from '../components/Display'

import KeXie from '../components/AllIntropage/KeXie'

export default [
    {
      path: '/Home',component:Home
    },
    {
      path: '/AllDepintro',component:AllDepIntro,
      children:[
        {path: '',component:KeXie},
        {path: '/KeXie',component:KeXie}
      ]

    },
    {
      path: '/Display',component:Display
    },
    {
      path: '/Form',component:Form
    }
    ]
