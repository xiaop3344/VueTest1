自定义事件

需要cnpm install --save pubsub-js  用于组件组件通信,可以 兄弟之间传递都可以
cnpm install element-ui --save

父组件向子组件传递

1. 父组件:<TodoFooter :msgs='msgs' :deleteSelected="deleteSelected" :SelectAll='SelectAll'/>
   子组件:
    props:{
        msgs:Array,
        deleteSelected:Function,
        SelectAll:Function
    },
    或者props:['msgs','deleteSelected','SelectAll']

子组件向父组件传递

    子组件:this.$emit("addmsg",msg);/* 使用this.$emit 来调用父组件绑定的回调函数(回调函数名,参数) */
    父组件:<TodoHeader ref="header"/>
         mounted(){  加载即绑定
            this.$refs.header.$on("addmsg",this.addmsg) 

    },

组件之间传递(无需关系)
    发布消息:Pubsub.publish("deleteSelected",this.index);
    订阅消息并处理
    mounted(){
            Pubsub.subscribe("deleteSelected",(msg,index)=>{
                this.deletemsgs(index);
            })
    }