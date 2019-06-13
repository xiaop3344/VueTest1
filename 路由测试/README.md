vue路由
需要  cnpm install vue-router --save

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

6.向路由目标传递参数
    1.通过路径传递
        获取参数 用$route.params.id id为传的key
    2.通过router-view  <router-view msg='abc'></router-view>
    并用props 接收 参考App-About
7.编程式导航 
    都是点击后跳转到指定地址
             pushshow(id){
                this.$router.push(`/home/message/detail/${id}`);
            },
            replaceshow(id){
                this.$router.replace(`/home/message/detail/${id}`);   
            }
    实现回退
    <button @click="$router.back()">回退</button>