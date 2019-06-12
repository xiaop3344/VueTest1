<template>
    <div>
        <div id="content">
            <router-view></router-view>
        </div>
        <div id="info">
            <infoLine/>
        </div>
    </div>
</template>
    
<script>
import InfoLine from './infoLine';
    export default {
        components:{
            InfoLine
        }
    }
</script>

<style>
    #content{
        margin: auto;
        width: 735px;
        float: left;

    }
    #info{
        margin: auto;
        float: left;
        width: 200px;
        margin-left: 8px;
    }

</style>