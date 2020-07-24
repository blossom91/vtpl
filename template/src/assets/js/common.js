import '@/assets/css/base.css'
import 'babel-polyfill'
{{#mobile}}
import '@/assets/css/common.css'

const maxWidth = 540
const scale = 3.75

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    // ios active失效问题
    document.body.addEventListener('touchstart', () => {})
    document.documentElement.style.fontSize = 100 / scale + 'vw'
    if (/(iPad)/i.test(navigator.userAgent)) {
        let width = document.documentElement.clientWidth
        width = width > maxWidth ? maxWidth : width
        document.documentElement.style.fontSize = width / scale + 'px'
    }
} else {
    ;(function(doc, win) {
        var pxOneRem = 0
        var remClient = scale
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            // 计算html的font-size
            recalc = function() {
                var clientWidth = docEl.clientWidth
                if (!clientWidth) return
                // 这里定一个页面的最大宽度
                clientWidth = clientWidth > maxWidth ? maxWidth : clientWidth
                pxOneRem = clientWidth / remClient
                docEl.style.fontSize = pxOneRem + 'px'
                // 纠错函数
                function adapt() {
                    var d = window.document.createElement('div')
                    d.style.width = '1rem'
                    d.style.display = 'none'
                    var head = window.document.getElementsByTagName('head')[0]
                    head.appendChild(d)
                    var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'))
                    return defaultFontSize
                }

                pxOneRem = (pxOneRem * pxOneRem) / adapt()
                docEl.style.fontSize = pxOneRem + 'px'
            }
        if (!doc.addEventListener) return
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)
        //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
    })(document, window)
}

{{/mobile}}


