import '../css/common.css'
// 移动端点击优化
import FastClick from 'fastclick-fixed'
FastClick.attach(document.body)

// 移动端rem适配
const setRemUnit = () => {
    const width = document.documentElement.clientWidth
    document.documentElement.style.fontSize = width / 3.75 + 'px'
}
window.onload = () => {
    let reSet
    setRemUnit()
    window.addEventListener('resize', () => {
        clearTimeout(reSet)
        reSet = setTimeout(setRemUnit, 300)
    }, false)
    window.addEventListener('pageshow', e => {
        if (e.persisted) {
            clearTimeout(reSet)
            reSet = setTimeout(setRemUnit, 300)
        }
    }, false)
    document.body.style.fontSize = '16px' // 重写body字体大小方便继承
}