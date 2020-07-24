<template>
    <div id="main">
        {{#router}}
        <router-view/> 
        {{else}}
        <YSwitch/> 
        {{/router}}
    </div>
</template>

<script>
{{#router}}
export default {
    name: 'App',
}
{{else}}
import YSwitch from '@/components/YSwitch'

export default {
    name: 'App',
    components: {
        YSwitch,
    },
}
{{/router}}
</script>

