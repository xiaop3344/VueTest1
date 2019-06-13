<template>
    <div>
        <ul v-for="(message) in messages" :key="message.id">
            <li>
                <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
                <button @click="pushshow(message.id)">push查看</button>
                <button @click="replaceshow(message.id)">replace查看</button>
            </li>
        </ul>
        <button @click="$router.back()">回退</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
    
<script>
    export default {
        data() {
            return {
                messages:[]
            }
        },
        mounted(){
            setTimeout(() => {
                const messages=[
                    {
                        id:1,
                        title:'message01'
                    },
                    {
                        id:3,
                        title:'message03'
                    },{
                        id:4,
                        title:'message04'
                    }

                ]
                this.messages=messages;
            }, 1000);
        },
        methods:{
            pushshow(id){
                this.$router.push(`/home/message/detail/${id}`);
            },
            replaceshow(id){
                this.$router.replace(`/home/message/detail/${id}`);   
            }
        }
    }
</script>

<style>

</style>