function font(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px'
    // document.documentElement.clientWidth 可视端口的宽度
}
font()
window.onresize = font