<template>
    <div>
        <div>
            <a href="#">
                <img :src="imgurl" @mouseenter="imgurl=imgurl1" @mouseleave="imgurl=imgurl2">
                <span class="titleFont">寻找</span>
            </a>
        </div>
        <Navigation/>
    </div>
</template>
    
<script>
import Navigation from './Navigation';
    export default {
        components:{
            Navigation
        },
        data() {
            return {
                imgurl:'static/images/icon.gif',
                imgurl1:'static/images/icon1.gif',
                imgurl2:'static/images/icon.gif'
            }
        },
        
    }
</script>

<style>
    .titleFont{
        font-size: 30px;
    }
    img{
        height: 80px;

    }
    
    a:link { 
color: #27db54; 
text-decoration: none; 
} 
a:visited { 
color: #000000; 
text-decoration: none; 
} 
a>span:hover { 
color: #eb3434; 
text-decoration: none; 
} 
</style>