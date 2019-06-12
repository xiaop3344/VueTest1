<template>
    <div>
        <div>
            <a href="#">
                <img :src="imgurl" @mouseenter="imgurl=imgurl1" @mouseleave="imgurl=imgurl2">
                <span class="titleFont">寻找</span>
            </a>
            <!-- <div class="userspan">
                <img :src="imgurl" alt="">
                <span>ahah </span>
            </div> -->
            <div class="userspan loginclass">
                <LoginRegister/>
            </div>
        </div>
        <Navigation/>
    </div>
</template>
    
<script>
import Navigation from './Navigation';
import LoginRegister from './LoginRegister';    
    export default {
        components:{
            Navigation,
            LoginRegister
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
.userspan{
    float:right;
    vertical-align: bottom; 
}
.loginclass{
    padding-top: 45px;
    padding-right: 30px;
}
</style>