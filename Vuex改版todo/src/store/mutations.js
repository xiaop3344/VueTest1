import {ADDMSG,SELECTALL,DELETEMSGS,DELETESELECTED} from './mutations-types';
export default {
    [SELECTALL](state,isDelete){
        if(isDelete){
            state.msgs.forEach(msg=> msg.selected=true)
        }
        else{
            state.msgs.forEach(msg=> msg.selected=false)
        }
    },
    [ADDMSG](state,msg){
        state.msgs.unshift(msg);
       
    },
    [DELETEMSGS](state,index){
        state.msgs.splice(index,1);
    },
    [DELETESELECTED](state){
        state.msgs=state.msgs.filter(msg => !msg.selected);
    },

}