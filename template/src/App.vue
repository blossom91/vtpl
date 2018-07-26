<template>
    <div id="app">
        {{#router}}
        <router-view/> {{else}}
        <HelloWorld/> {{/router}}
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
}
</script>

