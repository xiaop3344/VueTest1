/* 使用localStorage存储数据的工具模块 */
export default{
    saveMsgs(Msgs){
        window.localStorage.setItem("Msgs",JSON.stringify(Msgs));
    },
    getMsgs(){
        return JSON.parse(window.localStorage.getItem("Msgs")||'[]')
    }
}