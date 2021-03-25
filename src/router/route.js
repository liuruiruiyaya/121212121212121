import router from './index'
const list = ["/logon"]
router.beforeEach((to,from,next) => {
    console.log(to)
    let url = 1
    if(url == 1){
        console.log("通过了")
        next('/')
    }else{
        console.log(list.indexOf(to.path) !== -1)
        if(list.indexOf(to.path) !== -1){
            console.log("我执行了next（）时间")
            next()
        }else{
            next("/logon")
            console.log(2)
        }
    }
   
})