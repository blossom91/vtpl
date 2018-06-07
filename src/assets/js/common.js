import '@/assets/css/base.css'
import '@/assets/css/common.css'
// 移动端点击优化  非移动端注销下列方法
import FastClick from 'fastclick-fixed'
FastClick.attach(document.body)

// 移动端rem适配
const setRemUnit = () => {
    let width = document.documentElement.clientWidth
    width = width > 640 ? 640 : width
    document.documentElement.style.fontSize = width / 3.75 + 'px'
    // if (window.orientation === 90 || window.orientation === -90) {
    //     let height = document.documentElement.clientHeight
    //     height = height > 640 ? 640 : height
    //     document.documentElement.style.fontSize = height / 3.75 + 'px'
    // }
}
window.onload = () => {
    let reSet
    setRemUnit()
    window.addEventListener('resize', () => {
        clearTimeout(reSet)
        reSet = setTimeout(setRemUnit, 300)
    })
    window.addEventListener('pageshow', e => {
        if (e.persisted) {
            clearTimeout(reSet)
            reSet = setTimeout(setRemUnit, 300)
        }
    })
}
