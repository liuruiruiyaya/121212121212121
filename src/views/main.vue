<template>
    <div>3
        <button @click="content"></button>
        <router-view></router-view>
        
    </div>
    
</template>
<script>
export default {
    data() {
        return {
             dataList:[
                {
                    id:1,
                    name:'主页',
                    path:'/home/list'
                },
                {
                    id:2,
                    name:'我的',
                    path:'/mine'
                },
                {
                    id:3,
                    name:'客服',
                    path:'/kf'
                }
            ]
        }
    },
    methods:{
        content() {
            console.log(1)
            this.$router.push({path:'/home/list'})
        }
    }
}
</script>