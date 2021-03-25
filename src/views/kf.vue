<template>
    <div>
        <div style="width:500px;height:500px" id="div"></div>
        <div>121212{{name}}</div>
        <button @click="goto">tiao</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:"我是测试的"
        }
    },

    methods:{
        mycharts() {
            let echarts = this.$echarts.init(document.getElementById("div"),"dark")
            let option = {
                title:{
                    text:"测试的端口"
                },
                xAxis:{
                    data:["牛仔裤","羊毛衫","男款风衣"]
                },
                yAxis:{},
                series:[
                    {
                        type:'line',
                        data:[78,56,89]
                    }
                ]
            }
            echarts.setOption(option,true)
        },

        goto() {
            this.$router.push({path:'content'})
        }
    },

    mounted() {
        this.mycharts()
        
    }
}
</script>