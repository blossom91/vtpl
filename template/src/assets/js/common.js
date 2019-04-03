import '@/assets/css/base.css'
{{#mobile}}
import '@/assets/css/common.css'
import FastClick from 'fastclick'
FastClick.attach(document.body)

if (!window.Promise) {
    window.Promise = Promise
}

const setRemUnit = () => {
    let html = document.documentElement
    html.style.fontSize = 100 / 3.75 + 'vw'
    let width = html.clientWidth
    const set_width = width / 3.75
    // const now_width = Number(document.documentElement.style.fontSize.slice(0, -2))
    // if (set_width != now_width) {
    //     document.documentElement.style.fontSize = width / 3.75 + 'px'
    // }
    // 安卓部分机型rem计算不准,二货安卓
    let whileCount = 0
    while (true) {
        let settingFs = Number(html.style.fontSize.slice(0, -2))
        let realFs = Number(window.getComputedStyle(html).fontSize.slice(0, -2))
        let delta = realFs - set_width
        if (Math.abs(delta) >= 0.5) {
            if (delta > 0) {
                // settingFs--
                settingFs = settingFs - 0.3
            } else {
                // settingFs++
                settingFs = settingFs + 0.3
            }
            // html.style.fontSize = settingFs + 'px'
            html.style.fontSize = settingFs + 'vw'
        } else {
            break
        }
        if (whileCount++ > 30) {
            break
        }
    }
}
setRemUnit()
   
{{/mobile}}


