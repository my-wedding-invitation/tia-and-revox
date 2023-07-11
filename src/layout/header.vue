<template>
    <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <a class="navbar-minimalize minimalize-styl-2 btn btn-primary" href="#">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <ul class="nav navbar-top-links navbar-right">
                <li @click="onSignOut">
                    <a href="#">
                        <i class="fa fa-sign-out"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'app-header',
    mounted() {
        const navbar = document.getElementsByClassName('navbar-minimalize')[0]
        jQuery(navbar)
            .on('click', function (e) {
                e.preventDefault()
                jQuery('body').toggleClass('mini-navbar')
                SmoothlyMenu()
            })
    },
    methods: {
        onSignOut() {
            localStorage.removeItem('access')
            setTimeout(() => {
                window.location.href =  `${window.location.origin}/access`
            }, 2e2)
        }
    }
}
</script>