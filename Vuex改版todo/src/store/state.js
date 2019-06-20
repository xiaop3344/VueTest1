import StorageUtil from '../util/StorageUtil';
export default {
     /* msgs:JSON.parse(window.localStorage.getItem('msgs')||'[]')  */
     /* msgs:[
        {title:'45',selected:true},
        {title:'sdfdf',selected:false},
        {title:'qweqe',selected:true}
    ] */ 
    msgs:StorageUtil.getMsgs()

}