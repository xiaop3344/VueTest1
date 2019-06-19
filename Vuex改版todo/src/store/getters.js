import state from './state';
import mutations from './mutations';
export default {
    
    selectedCount(){
        return this.msgs.reduce((preTotle,msg)=>preTotle+(msg.selected?1:0),0); 
    },
    isAllSelect:{
        get(){
            return this.selectedCount===this.msgs.length &&this.msgs.length>0;
        },
        set(value){ /* value为最新的checkbox的值 */
            mutations.SelectAll(value);
        }
    }
}