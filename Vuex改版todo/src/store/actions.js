import state from './state';

export default {
    SelectAll({commit}){
        commit('SelectAll')
    },
    addmsg({commit}){
        commit('addmsg')
       
    },
    deletemsgs({commit}){
        commit('deletemsgs')
    },
    deleteSelected({commit}){
        commit('deleteSelected')
    }

}