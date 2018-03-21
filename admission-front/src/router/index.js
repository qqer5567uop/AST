import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '../components/Home'
import Form from '../components/Form'
import AllDepIntro from '../components/AllIntropage/AllDepIntro'
import Display from '../components/Display'

import KeXieJiShuBu from '../components/AllIntropage/KeXieJiShuBu'
import KeXieSaiShiBu from '../components/AllIntropage/KeXieSaiShiBu'
import XiaoHongMao from '../components/AllIntropage/XiaoHongMao'
import XinWenZhongXin from '../components/AllIntropage/XinWenZhongXin'
import BanGongShi from '../components/AllIntropage/BanGongShi'
import LiYiDui from '../components/AllIntropage/LiYiDui'
import BianLunDui from '../components/AllIntropage/BianLunDui'
import ZhuChiRenDui from '../components/AllIntropage/ZhuChiRenDui'
import WenYiBu from '../components/AllIntropage/WenYiBu'
import XueShuBu from '../components/AllIntropage/XueShuBu'
import WaiLianBu from '../components/AllIntropage/WaiLianBu'
import NvShengBu from '../components/AllIntropage/NvShengBu'
import QuanYiBu from '../components/AllIntropage/QuanYiBu'
import QiMingShuWu from '../components/AllIntropage/QiMingShuWu'
import ZuZhiBu from '../components/AllIntropage/ZuZhiBu'
import XinLiBu from '../components/AllIntropage/XinLiBu'
import SheHuiShiJianBu from '../components/AllIntropage/SheHuiShiJianBu'
import XuanChuanBu from '../components/AllIntropage/XuanChuanBu'


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
    {
      path: '/XiaoHongMao',component:XiaoHongMao
    },
    {
      path: '/XinWenZhongXin',component:XinWenZhongXin
    },
    {
      path: '/BanGongShi',component:BanGongShi
    },
    {
      path: '/LiYiDui',component:LiYiDui
    },
    {
      path: '/BianLunDui',component:BianLunDui
    },
    {
      path: '/ZhuChiRenDui',component:ZhuChiRenDui
    },
    {
      path: '/WenYiBu',component:WenYiBu
    },
    {
      path: '/XueShuBu',component:XueShuBu
    },
    {
      path: '/WaiLianBu',component:WaiLianBu
    },
    {
      path: '/NvShengBu',component:NvShengBu
    },
    {
      path: '/QuanYiBu',component:QuanYiBu
    },
    {
      path: '/QiMingShuWu',component:QiMingShuWu
    },
    {
      path: '/ZuZhiBu',component:ZuZhiBu
    },
    {
      path: '/XinLiBu',component:XinLiBu
    },
    {
      path: '/SheHuiShiJianBu',component:SheHuiShiJianBu
    },
    {
      path: '/XuanChuanBu',component:XuanChuanBu
    }
    ]
