<template>
    <div>
        <!-- 标题区 -->
        <div id="titleBox">
            <span class="articleTitle">文章标题文章标题文章标题文章标题文章标题</span>
            
            <br>
            <span class="articleTitleshort">作者:xxx  时间:19.1.22 11:11:11</span>
        </div> 
        <div class="articleReadCount">55</div>
        
        
        <hr>
        <!-- 内容区 -->
        <div id="articleContent">
            在19和20世纪之交，影响深远的德国精神病学家Emil Kraepelin在病人中发现了一种奇怪模式。有些人喜欢早睡早起，而另一些人一到晚上就变得精神奕奕，天亮才去睡觉。

经过多年系统的临床分析、心理学实验和睡眠研究，他和学生提出了现已被普遍采用的概念：这个世界里存在夜猫子型和云雀型——两种作息偏好。

今天，我们将这两种偏好称为时间型，但最新证据表明，至少还有另外两种时间型。

虽然大多数人的时间型都处在“早晨—夜晚”光频的两边，但大规模调查发现，在中间位置还存在其他几种作息类别。

研究作者提出，除了云雀或猫头鹰型，还有人属于“打盹”和“下午”型。

下午型早晚的时候昏昏欲睡，在中午和傍晚之间，警觉性达到顶峰。另一方面，打盹型通常在上午11点到下午3点间困倦不堪，而在早上和晚上都很清醒。

多年来，心理学家一直试图厘清时间型光谱的复杂性，同时，越来越多的证据表明，人类中存在三种甚至四种主要的时间型。

共有1305名参与者填写了在线问卷，其中绝大多数是女性且相对年轻。

问卷包括基本的职业和个人信息，参与者通过答题确定自己基本的早晚作息偏好、昼夜节律和睡眠质量，以及某随机时间点上的清醒程度(从“极度困倦”到“非常警觉”)。

此外，全部问题都以正常夜晚睡眠和7:30 am起床为前提(这里不是说假定参与者昨晚睡眠正常，而是说，参与者或许昨晚失眠了，但是他们总有不失眠和7点起床的时候，所以，只要上报那一天的状态就可以了)。

通过统计分析，研究人员将反馈分为4类。

虽然有心理学家猜测，还存在一种全天精神的爆肝型，但新研究没有找到相关证据。在后工业社会中，作者认为，大多数人属于上述四种时间型中的一种，同时有30％的参与者无法归类。

主要的局限性和值得注意的点，最大的一个是缺乏比较主观和客观困倦程度的数据。另一个则是参与者的年龄和性别不够均匀。

因此，作者承认进一步的研究需要校验这四种不同的困倦曲线，并找出可能影响其发育的生物，遗传，心理社会或环境因素。

关于其他时间型的研究文献很少，结果也各不相同；但正如现在我们所知，它们比我们曾经想象得要普遍得多。

该研究发表在刊物《人格和个体差异》上。
        </div>
        <hr >
        <!-- 点赞点踩区 -->
        <div>
            <!-- <div id="commentbox">
            <el-link :underline="false" type="danger" @click="addgoodComment((alreadyGoodComment?1:-1))">
                <i  class="el-icon-app-appreciatefill" v-show="alreadyGoodComment"></i>
                <i  class="el-icon-app-appreciate" v-show="!alreadyGoodComment"></i> (10) </el-link>
            <el-link :underline="false" type="success" @click="addbadComment((alreadyBadComment?1:-1))">
                <i  class="el-icon-app-oppose_fill_light" v-show="alreadyBadComment"></i>
                <i  class="el-icon-app-oppose_light" v-show="!alreadyBadComment"></i> (10) </el-link>
            <el-link :underline="false" type="warning" @click="addFavor((alreadyFavor?1:-1))">
                <i  class="el-icon-app-favorfill" v-show="alreadyFavor"></i>
                <i  class="el-icon-app-favor" v-show="!alreadyFavor"></i> (10) </el-link>
            </div> -->
            <GoodBadComment id="goodBadComment"/>
        </div>
        <hr>
        评论区
        <div></div>
    </div>
</template>
    
<script>
import GoodBadComment from '../components/GoodBadComment';
    export default {
        components:{
            GoodBadComment
        }
    }
</script>

<style>
    /* #titleshort{
        height: 50px;
        line-height: 50px;
    } */
    .articleTitleshort{
        font-size: 15px;
        text-align: center;
        width: 600px;
        float: left;
    }
    #articleContent{
        line-height: 25px;
    }
    .articleTitle{
        font-size: 24px;
        text-align: center;
        width: 600px;
        display:inline-block;
        font-weight:bold;
    }
    .articleReadCount{
        font-size: 30px;
        padding-right: 10px;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
    #titleBox{
        padding: 2px;
        height: 100px;
        line-height: 50px;
        text-align: center;
        width: 600px;
        float: left;

    }
    #goodBadComment{
        height: 30px;
        line-height: 30px;
        text-align: right;
        padding-right: 20px;
    }
    .iconfontSize{
        font-size: 18px;
    }

</style>