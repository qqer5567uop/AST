import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '../components/Home'
import Form from '../components/Form'
import AllDepIntro from '../components/AllDepIntro'
import Display from '../components/Display'

export default [
    {
      path: '/Home',component:Home
    },
    {
      path: '/AllDepintro',component:AllDepIntro

    },
    {
      path: '/Display',component:Display
    },
    {
      path: '/Form',component:Form
    }
    ]
