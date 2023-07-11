<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="block m-t-xs font-bold"></span>
                            <span class="text-muted text-xs block"></span>
                        </a>
                    </div>
                    <div class="logo-element">TIA</div>
                </li>
                <router-link tag="li" to="/admin">
                    <a href="#">
                        <i class="fa fa-user"></i>
                        <span class="nav-label"> Guest</span>
                    </a>
                </router-link>
                <router-link tag="li" to="/admin/comment">
                    <a href="#">
                        <i class="fa fa-comment"></i>
                        <span class="nav-label"> Comment</span>
                    </a>
                </router-link>
                <router-link tag="li" to="/admin/reservation">
                    <a href="#">
                        <i class="fa fa-calendar"></i>
                        <span class="nav-label"> Reservation</span>
                    </a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'app-sidebar'
}
</script>