export default {
    
    selectedCount(state){
        return state.msgs.reduce((preTotle,msg)=>preTotle+(msg.selected?1:0),0); 
    },
    isAllSelect(state,getters){
        
        return getters.selectedCount===getters.totalSize &&getters.selectedCount>0;
        /* return getters.selectedCount===state.msgs.length &&state.msgs.length>0; */
    },
    totalSize(state){
        return state.msgs.length;
    }
}