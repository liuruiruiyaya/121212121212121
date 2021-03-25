<template>
    <div>
        <div>我是一个content页面</div>
        <button @click="list">12121</button>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },

    methods:{
        list() {
            this.$router.push({path:'/header'})
           
        }
    },

    mounted() {
        console.log(this.$store.state.url)
    }
}
</script>