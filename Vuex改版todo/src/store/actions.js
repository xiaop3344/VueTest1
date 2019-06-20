import {ADDMSG,SELECTALL,DELETEMSGS,DELETESELECTED} from './mutations-types';
export default {
    SelectAll({commit},isDelete){
        commit(SELECTALL,{isDelete})
    },
    addmsg({commit},msg){
        commit(ADDMSG,msg);
       
    },
    deletemsgs({commit},index){
        commit(DELETEMSGS,index)
    },
    deleteSelected({commit}){
        commit(DELETESELECTED)
    }

}