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
        // 安卓部分机型rem计算不准,二货安卓
        let whileCount = 0
        while (true) {
            let settedFs = Number(html.style.fontSize.slice(0, -2))
            let settingFs = settedFs
            let realFs = Number(window.getComputedStyle(html).fontSize.slice(0, -2))
            let delta = realFs - settedFs
            if (Math.abs(delta) >= 1) {
                if (delta > 0) {
                    settingFs--
                } else {
                    settingFs++
                }
                html.style.fontSize = settingFs + 'px'
            } else {
                break
            }
            if (whileCount++ > 30) {
                break
            }
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


