<template>
    <div class="con">
        <div>
            <div v-for="itme of dataList" :key="itme.id" class="left">
            <div>
                <keep-alive>
                    <router-link :to="itme.path">{{itme.name}}</router-link>
                </keep-alive>
            </div>
        </div>
        </div>
        <div class="right">
            <div class="border">
                我是测试的系统内 
            </div>
            <router-view></router-view>
        </div>
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
                    path:'/list'
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
        add() {
            this.$router.push({path:'left'})
        }
    }
}
</script>
<style scoped lang="scss">
    .con{
        display: flex;
        .left{
            display: flex;
            flex-direction: column;
            height: 30px;
            width: 200px;
        }
        .right{
            width: 100%;
                .border{
                    width: 100%;
                    background-color: aqua;
          }
        }
        
    }
    
</style>