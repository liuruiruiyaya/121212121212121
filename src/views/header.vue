<template>
    <div>
        <div style="width:500px;height:500px" id="div"></div>
        <input type="text" v-model="user">
        <input type="text" v-model="pass">
        <button @click="yes">确定</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user:'',
            pass:''
        }
    },

    methods:{
        mycharts() {
            let echarts = this.$echarts.init(document.getElementById("div"))
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

        yes() {
            
     
            
            // localStorage.setItem("pass",this.pass)
        }
    },

    mounted() {
        console.log(this.$store.state.url)
        console.log(this.$url.url,12)
        this.mycharts()
    }
}
</script>