// 封装路由 到处给main.js 使用
// 导入 vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入
import Heross from './components/Heroes.vue'
import Equip from './components/Equip.vue'
import Skill from './components/Skill.vue'
import HeroesAdd from './components/HeroesAdd.vue'
import HeroesEdit from './components/HeroesEdit.vue'
// 定义路由规则
const routes=[
    {path:'/heroes',component:Heross},
    {path:'/equip',component:Equip},
    {path:'/skill',component:Skill},
    {path:'/heroes/add',component:HeroesAdd},
//   静态路由
    {path:'/heroes/edit/:id',name:'heroesEdit',component:HeroesEdit},
]

// npm安装的 路由需要注册在Vue对象中
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({ routes })

export default router