<template>
    <div>
        <input type="checkbox" v-model="isAllSelect">
        <span>已完成{{selectedCount}}/全部{{msgs.length}}</span>
        <button v-show="selectedCount" @click="deleteSelectedMsg">删除选中</button>
    </div>
</template>
<script>
export default {
    props:{
        msgs:Array,
        deleteSelected:Function,
        SelectAll:Function
    },
    computed:{
        selectedCount(){
            /* 统计msgs中的selected为true有多少个
            pretotle 计数,初始值为"," 后面的0
            如果selected为true则+1 */
            return this.msgs.reduce((preTotle,msg)=>preTotle+(msg.selected?1:0),0);
        },
        isAllSelect:{
            get(){
                return this.selectedCount===this.msgs.length &&this.msgs.length>0;
            },
            set(value){ /* value为最新的checkbox的值 */
                this.SelectAll(value);
            }
        }
    },
    methods:{
        deleteSelectedMsg(){
            this.deleteSelected();
        }
    }
}
</script>