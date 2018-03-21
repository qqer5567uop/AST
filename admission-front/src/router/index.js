import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '../components/Home'
import Form from '../components/Form'
import AllDepIntro from '../components/AllIntropage/AllDepIntro'
import Display from '../components/Display'

import KeXieJiShuBu from '../components/AllIntropage/KeXieJiShuBu'
import KeXieSaiShiBu from '../components/AllIntropage/KeXieSaiShiBu'


export default [
    {
      path: '/Home',component:Home
    },
    {
      path: '/AllDepintro',component:AllDepIntro,
    },
    {
      path: '/Display',component:Display
    },
    {
      path: '/Form',component:Form
    },
    {
      path: '/KeXieJiShuBu',component:KeXieJiShuBu
    },
    {
      path: '/KeXieSaiShiBu',component:KeXieSaiShiBu
    },
    ]
