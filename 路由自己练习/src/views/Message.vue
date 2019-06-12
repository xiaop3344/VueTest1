<template>
    <div>
        <ul v-for="(message) in messages" :key="message.id">
            <li>
                <a href="#">{{message.title}}</a>
            </li>
        </ul>
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
        }
    }
</script>

<style>

</style>