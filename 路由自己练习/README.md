vue路由
需要  cnpm install vue-router --save
需要 cnpm i element-ui -S

使用路由3步
1.定义路由组件  ：写vue
2.注册路由
routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            //4.嵌套路由写在下面  
            children:[
                {
                    path:'/home/news',
                    component:News
                },
                {
                    path:'message', //简化写法
                    component:Message
                },
                {
                    path:'',
                    redirect:'/home/news'
                }
            ]

        },
        {   //当为请求 /时  即默认显示 重定向 About
            path:'/',
            redirect:'/home'
        }
    ]
3.使用路由
<router-link to:''>
<router-view>

4.嵌套路由

5.缓存路由组件 用keep-alive
<keep-alive>
     <router-view></router-view>
</keep-alive>
