<template>
    <div>
        <input type="checkbox" v-model="isAllSelect">
        <span>已完成{{selectedCount}}/全部{{totalSize}}</span>
        <button v-show="selectedCount" @click="deleteSelectedMsg">删除选中</button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    
    computed:{
        ...mapGetters(['totalSize','selectedCount']),
        
        isAllSelect:{
            get(){
                return this.$store.getters.isAllSelect;
            },
            set(value){ /* value为最新的checkbox的值 */
                return this.$store.dispatch('SelectAll',value);
            }
        }
    },
    methods:{
        deleteSelectedMsg(){
            this.$store.dispatch('deleteSelected');
        }
    }
}
</script>