import '@/assets/css/base.css'
{{#mobile}}
import '@/assets/css/common.css'
import FastClick from 'fastclick-fixed'
FastClick.attach(document.body)
const setRemUnit = () => {
    let width = document.documentElement.clientWidth
    const set_width = width / 3.75
    const now_width = parseInt(document.documentElement.style.fontSize, 10)
    if (set_width != now_width) {
        document.documentElement.style.fontSize = width / 3.75 + 'px'
    }
}
window.onload = () => {
    let reSet
    setRemUnit()
    window.addEventListener('resize', () => {
        clearTimeout(reSet)
        reSet = setTimeout(setRemUnit, 300)
    })
}
{{/mobile}}


