import state from './state';
import {ADDMSG} from './mutations-types';
export default {
    msgs:state.msgs,
    SelectAll(isDelete){
        if(isDelete){
            this.msgs.forEach(msg=> msg.selected=true)
        }
        else{
            this.msgs.forEach(msg=> msg.selected=false)
        }
    },
    addmsg(msg){
        this.msgs.unshift(msg);
       
    },
    deletemsgs(index){
        this.msgs.splice(index,1);
    },
    deleteSelected(){
        this.msgs=this.msgs.filter(msg => !msg.selected);
    },

}