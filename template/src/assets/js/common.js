import '@/assets/css/base.css'
{{#mobile}}
import '@/assets/css/common.css'
import FastClick from 'fastclick-fixed'
FastClick.attach(document.body)
const setRemUnit = () => {
    let width = document.documentElement.clientWidth
    const set_width = width / 3.75
    const now_width = Number(document.documentElement.style.fontSize.slice(0, -2))
    if (set_width != now_width) {
        document.documentElement.style.fontSize = width / 3.75 + 'px'
        // document.documentElement.style.fontSize = 100 / 3.75 + 'vw'
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


