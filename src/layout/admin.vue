<template>
    <div id="wrapper">
        <app-sidebar></app-sidebar>
        <div id="page-wrapper" class="gray-bg">
            <app-header></app-header>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import header from '@/layout/header.vue'
import sidebar from '@/layout/sidebar.vue'

export default {
    name: 'admin',
    components: {
        'app-header': header,
        'app-sidebar': sidebar
    },
}
</script>