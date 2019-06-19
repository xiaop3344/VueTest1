import state from './state';
import {ADDMSG} from './mutations-types';
export default {
    SelectAll({commit}){
        commit('SelectAll')
    },
    addmsg({commit},msg){
        commit(ADDMSG,{msg});
       
    },
    deletemsgs({commit}){
        commit('deletemsgs')
    },
    deleteSelected({commit}){
        commit('deleteSelected')
    }

}