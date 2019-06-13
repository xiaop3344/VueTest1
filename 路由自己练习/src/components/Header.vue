<template>
    <div>
        <div>
            <a href="/#/home" class="underlinfalse">
                <img :src="imgurl" @mouseenter="imgurl=imgurl1" @mouseleave="imgurl=imgurl2">
                <span class="titleFont">寻找</span>
            </a>
            <!-- <div class="userspan">
                <img :src="imgurl" alt="">
                <span>ahah </span>
            </div> -->
            <div class="userspan">
                <LoginRegister class="loginclass" v-show="!loginflag" :changeloginflag="changeloginflag"/>
                <Logined v-show="loginflag" :changeloginflag="changeloginflag"/> 
            </div>
        </div>
        <Navigation/>
    </div>
</template>
    
<script>
import Navigation from './Navigation';
import LoginRegister from './LoginRegister';
import Logined from './Logined';    
    export default {
        components:{
            Navigation,
            LoginRegister,
            Logined
        },
        data() {
            return {
                imgurl:'static/images/icon.gif',
                imgurl1:'static/images/icon1.gif',
                imgurl2:'static/images/icon.gif',
                loginflag:false
            }
        },
        methods:{
            changeloginflag(){
                this.loginflag=!this.loginflag;
            }
        }
        
    }
</script>

<style>
    .titleFont{
        font-size: 30px;
    }
    img{
        height: 80px;

    }
    
    .underlinfalse:link { 
color: #27db54; 
text-decoration: none; 
} 
.underlinfalse:visited { 
color: #000000; 
text-decoration: none; 
} 
.underlinfalse>span:hover { 
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