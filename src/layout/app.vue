<template>
    <app-fragment>
        <router-view></router-view>
        <simplert />
    </app-fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'

export default {
    name: 'app',
    components: {
        'app-fragment': Fragment
    },
}
</script>
