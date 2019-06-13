<template>
    <div>
        <div id="commentbox">
            <el-link :underline="false" type="danger" @click="addgoodComment((alreadyGoodComment?1:-1))">
                <i  class="el-icon-app-appreciatefill" v-show="alreadyGoodComment"></i>
                <i  class="el-icon-app-appreciate" v-show="!alreadyGoodComment"></i>
                <span class="iconfontSize"> (10) </span>
                </el-link>
            <el-link :underline="false" type="success" @click="addbadComment((alreadyBadComment?1:-1))">
                <i  class="el-icon-app-oppose_fill_light" v-show="alreadyBadComment"></i>
                <i  class="el-icon-app-oppose_light" v-show="!alreadyBadComment"></i>
                <span class="iconfontSize"> (10) </span>
                </el-link>
            <el-link :underline="false" type="warning" @click="addFavor((alreadyFavor?1:-1))">
                <i  class="el-icon-app-favorfill" v-show="alreadyFavor"></i>
                <i  class="el-icon-app-favor" v-show="!alreadyFavor"></i>
                <span class="iconfontSize"> (10) </span>
                </el-link>
            </div>
    </div>
</template>
    
<script>
     export default {
        data() {
            return {
                alreadyGoodComment:false,
                alreadyBadComment:false,
                alreadyFavor:false
            }
        },
        methods:{
            addgoodComment(value){
                this.alreadyGoodComment=!this.alreadyGoodComment;
                console.info(value);
            },
            addbadComment(value){
                
                this.alreadyBadComment=!this.alreadyBadComment;
                console.info(value);
            },
            addFavor(value){
                
                this.alreadyFavor=!this.alreadyFavor;
                console.info(value);
            }

        }
    }
</script>

<style>
    
</style>