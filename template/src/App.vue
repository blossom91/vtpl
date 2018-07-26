<template>
    <div id="app">
        {{#router}}
        <router-view/> {{else}}
        <HelloWorld/> {{/router}}
    </div>
</template>

<script>
{{#yuni}}
import * as JSB from '@uneed/jsbridge-webview'
{{/yuni}}
import HelloWorld from '@/components/HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
}
</script>

