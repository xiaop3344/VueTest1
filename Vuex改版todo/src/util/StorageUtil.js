/* 使用localStorage存储数据的工具模块 */
export default{
    saveMsgs(Msgs){
        window.localStorage.setItem("msgs",JSON.stringify(Msgs));
    },
    getMsgs(){
        return JSON.parse(window.localStorage.getItem("msgs")||'[]')
    }
}