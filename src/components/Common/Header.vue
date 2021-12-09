<template>
<div>
    <!-- =============== Start of Header 1 Navigation =============== -->
    <header class="header1">
        <nav class="navbar navbar-default navbar-static-top fluid_header centered">
        <div class="container">
            <!-- Logo -->
            <div class="col-md-2 col-sm-6 col-xs-8 nopadding">
            <router-link to="/home">
                <img src="/frontend/images/logo.svg" alt="logo"/>
            </router-link>
            <!-- INSERT YOUR LOGO HERE -->
            </div>

            <!-- ======== Start of Main Menu ======== -->
            <div class="col-md-10 col-sm-6 col-xs-4 nopadding">
            <div class="navbar-header page-scroll">
                <button
                type="button"
                class="navbar-toggle toggle-menu menu-right push-body"
                data-toggle="collapse"
                data-target="#main-nav"
                aria-expanded="false"
                >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
            </div>

            <!-- Start of Main Nav -->
            <div
                class="
                collapse
                navbar-collapse
                cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right
                "
                id="main-nav"
            >
                <ul class="nav navbar-nav pull-right">
                <!-- Mobile Menu Title -->
                <li class="mobile-title">
                    <h4>main menu</h4>
                </li>

                <!-- Simple Menu Item -->
                <li class="dropdown simple-menu">
                    <router-link to="/home">
                    home
                    </router-link>
                </li>

                <!-- Simple Menu Item -->
                <li class="dropdown simple-menu">
                    <router-link to="/search-job">
                    Search Job
                    </router-link>
                </li>

                <!-- Simple Menu Item -->
                <li class="dropdown simple-menu">
                    <router-link to="/find-candidate">
                    Find Candidate
                    </router-link>
                </li>

                <!-- Simple Menu Item -->
                <li class="dropdown simple-menu">
                    <router-link to="/companies">
                    Companies
                    </router-link>
                </li>

                <!-- Simple Menu Item -->
                <li class="dropdown simple-menu">
                    <router-link to="/price-table">
                    Pricing
                    </router-link>
                </li>

                <!-- Simple Menu Item -->
                <li class="dropdown simple-menu">
                    <router-link to="/contact-us">
                    Contact us
                    </router-link>
                </li>

                <!-- Login Menu Item -->
                <!-- <li class="menu-item login-btn">
                    <a id="modal_trigger" href="javascript:void(0)" role="button"
                    ><i class="fa fa-lock"></i>login</a
                    >
                </li> -->
                </ul>
            </div>
            <!-- End of Main Nav -->
            </div>
            <!-- ======== End of Main Menu ======== -->
        </div>
        </nav>
    </header>
    <!-- =============== End of Header 1 Navigation =============== -->
    <sign-login></sign-login>
</div>
</template>

<script>
import SignLogin from './SignupLogin.vue'

export default {
    name: 'Header',
    components: {SignLogin}
}
</script>