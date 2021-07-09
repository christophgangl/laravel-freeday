<template>
<!--    <div class="container-fluid px-0">-->

<!--        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">-->
<!--            <div class="container-fluid">-->
<!--                <a class="navbar-brand" href="#">Navbar</a>-->
<!--                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                    <span class="navbar-toggler-icon"></span>-->
<!--                </button>-->
<!--                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">-->
<!--                    <ul class="navbar-nav">-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="#">-->
<!--                                <router-link to="/">Home</router-link>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="#">-->
<!--                                <router-link :to="{ name: 'dashboard'}">Dashboard</router-link>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" href="#">-->
<!--                                <router-link :to="{ name: 'about'}">About</router-link>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                    <ul class="navbar-nav ">-->
<!--                        <li class="nav-item" v-if="!loggedIn()">-->
<!--                            <a class="nav-link" href="#">-->
<!--                                <router-link :to="{ name: 'login'}">Login</router-link>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" v-if="!loggedIn()">-->
<!--                                <router-link :to="{ name: 'register'}">Register</router-link>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" @click="logout()" v-if="loggedIn()">-->
<!--                                Logout-->
<!--                            </a>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<!--        </nav>-->
<!--    </div>-->


    <!-- Navbar Marketplace-->
    <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
<!--    <header class="bg-light shadow-sm navbar-sticky">-->
<!--        <div class="navbar navbar-expand-lg navbar-light">-->
<!--            <div class="container"><a class="navbar-brand d-none d-sm-block flex-shrink-0 me-4 order-lg-1" href="index.html"><img src="../bootstrap_theme/dist/img/logo-dark.png" width="142" alt="Cartzilla"></a><a class="navbar-brand d-sm-none me-2 order-lg-1" href="index.html"><img src="../bootstrap_theme/dist/img/logo-icon.png" width="74" alt="Cartzilla"></a>-->
<!--                &lt;!&ndash; Toolbar&ndash;&gt;-->
<!--                <div class="navbar-toolbar d-flex align-items-center order-lg-3">-->
<!--                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span class="navbar-toggler-icon"></span></button><a class="navbar-tool d-none d-lg-flex" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#searchBox" role="button" aria-expanded="false" aria-controls="searchBox"><span class="navbar-tool-tooltip">Search</span>-->
<!--                    <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-search"></i></div></a><a class="navbar-tool d-none d-lg-flex" href="dashboard-favorites.html"><span class="navbar-tool-tooltip">Favorites</span>-->
<!--                    <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-heart"></i></div></a>-->
<!--                    <div class="navbar-tool dropdown ms-2"><a class="navbar-tool-icon-box border dropdown-toggle" href="dashboard-sales.html"><img src="../bootstrap_theme/dist/img/marketplace/account/avatar-sm.png" width="32" alt="Createx Studio"></a><a class="navbar-tool-text ms-n1" href="dashboard-sales.html"><small>Createx Std.</small>$1,375.00</a>-->
<!--                        <div class="dropdown-menu dropdown-menu-end">-->
<!--                            <div style="min-width: 14rem;">-->
<!--                                <h6 class="dropdown-header">Account</h6><a class="dropdown-item d-flex align-items-center" href="dashboard-settings.html"><i class="ci-settings opacity-60 me-2"></i>Settings</a><a class="dropdown-item d-flex align-items-center" href="dashboard-purchases.html"><i class="ci-basket opacity-60 me-2"></i>Purchases</a><a class="dropdown-item d-flex align-items-center" href="dashboard-favorites.html"><i class="ci-heart opacity-60 me-2"></i>Favorites<span class="fs-xs text-muted ms-auto">4</span></a>-->
<!--                                <div class="dropdown-divider"></div>-->
<!--                                <h6 class="dropdown-header">Seller Dashboard</h6><a class="dropdown-item d-flex align-items-center" href="dashboard-sales.html"><i class="ci-dollar opacity-60 me-2"></i>Sales<span class="fs-xs text-muted ms-auto">$1,375.00</span></a><a class="dropdown-item d-flex align-items-center" href="dashboard-products.html"><i class="ci-package opacity-60 me-2"></i>Products<span class="fs-xs text-muted ms-auto">5</span></a><a class="dropdown-item d-flex align-items-center" href="dashboard-add-new-product.html"><i class="ci-cloud-upload opacity-60 me-2"></i>Add New Product</a><a class="dropdown-item d-flex align-items-center" href="dashboard-payouts.html"><i class="ci-currency-exchange opacity-60 me-2"></i>Payouts</a>-->
<!--                                <div class="dropdown-divider"></div><a class="dropdown-item d-flex align-items-center" href="account-signin.html"><i class="ci-sign-out opacity-60 me-2"></i>Sign Out</a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="navbar-tool ms-4"><a class="navbar-tool-icon-box bg-secondary dropdown-toggle" href="marketplace-cart.html"><span class="navbar-tool-label">3</span><i class="navbar-tool-icon ci-cart"></i></a></div>-->
<!--                </div>-->
<!--                <div class="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">-->
<!--                    &lt;!&ndash; Search&ndash;&gt;-->
<!--                    <div class="input-group d-lg-none my-3"><i class="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>-->
<!--                        <input class="form-control rounded-start" type="text" placeholder="Search marketplace">-->
<!--                    </div>-->
<!--                    &lt;!&ndash; Categories dropdown&ndash;&gt;-->
<!--&lt;!&ndash;                    <ul class="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">&ndash;&gt;-->
<!--&lt;!&ndash;                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i class="ci-menu align-middle mt-n1 me-2"></i>Categories</a>&ndash;&gt;-->
<!--&lt;!&ndash;                            <ul class="dropdown-menu py-1">&ndash;&gt;-->
<!--&lt;!&ndash;                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Photos</a>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <ul class="dropdown-menu">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li class="dropdown-item product-title fw-medium"><a href="marketplace-category.html">All Photos<i class="ci-arrow-right fs-xs ms-1"></i></a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li class="dropdown-divider"></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Abstract</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Animals</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Architecture</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Beauty &amp; Fashion</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Business</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Education</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Food &amp; Drink</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Holidays</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Industrial</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">People</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Sports</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Technology</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Graphics</a>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <ul class="dropdown-menu">&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li class="dropdown-item product-title fw-medium"><a href="#">All Graphics<i class="ci-arrow-right fs-xs ms-1"></i></a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li class="dropdown-divider"></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Icons</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Illustartions</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Patterns</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Textures</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li><a class="dropdown-item" href="marketplace-category.html">Web Elements</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                </li>&ndash;&gt;-->
<!--&lt;!&ndash;                            </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                    </ul>&ndash;&gt;-->
<!--                    &lt;!&ndash; Primary menu&ndash;&gt;-->
<!--                    <ul class="navbar-nav">-->
<!--                        <li class="nav-item"><a class="nav-link" href="index.html"><router-link to="/">Home</router-link></a></li>-->

<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; Search collapse&ndash;&gt;-->
<!--        <div class="search-box collapse" id="searchBox">-->
<!--            <div class="card pt-2 pb-4 border-0 rounded-0">-->
<!--                <div class="container">-->
<!--                    <div class="input-group"><i class="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>-->
<!--                        <input class="form-control rounded-start" type="text" placeholder="Search marketplace">-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </header>-->


    <header class="navbar navbar-expand-lg navbar-light shadow-sm">
        <div class="container">

            <!-- Brand -->
            <a class="navbar-brand d-none d-lg-block order-lg-1" href="#">
                <img width="142" src="../bootstrap_theme/dist/img/logo-dark.png" alt="Cartzilla"/>
            </a>
            <a class="navbar-brand d-lg-none me-2" href="#">
                <img width="74" src="../bootstrap_theme/dist/img/logo-dark.png" alt="Cartzilla"/>
            </a>

            <!-- Toolbar -->
            <div class="navbar-toolbar d-flex align-items-center order-lg-3">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-tool" href="#">
                    <div class="navbar-tool-icon-box"><i class="navbar-tool-icon ci-search"></i></div>
                </a>

                <router-link v-if="!loggedIn()" :to="{ name: 'login'}">
                    <a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#">
                        <div class="navbar-tool-icon-box">
                            <i class="navbar-tool-icon ci-user"></i>
                        </div>
                        <div class="navbar-tool-text ms-n2"><small>Hello, Sign in</small>My Account</div>
                    </a>
                </router-link>




                <ul class="navbar-nav" v-if="loggedIn()">
                    <li class="nav-item dropdown">
<!--                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Dropdown</a>-->
                        <a class="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" data-bs-toggle="dropdown" href="#">
                            <div class="navbar-tool-icon-box">
                                <i class="navbar-tool-icon ci-user"></i>
                            </div>
                            <div class="navbar-tool-text ms-n2" v-if="user"><small>Hello {{user.name}}</small>My Account</div>
                            <div class="navbar-tool-text ms-n2" v-else><small>Hello</small>My Account</div>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action link</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li class="dropdown-divider"></li>
                            <li><a class="dropdown-item" @click="logout()" href="#">Logout</a></li>
                        </ul>
                    </li>
                </ul>


<!--                <a class="navbar-tool ms-3" href="#">-->
<!--                    <div class="navbar-tool-icon-box bg-secondary">-->
<!--                        <span class="navbar-tool-label">4</span>-->
<!--                        <i class="navbar-tool-icon ci-cart"></i>-->
<!--                    </div>-->
<!--                </a>-->
            </div>

            <!-- Collapsible menu -->
            <div class="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
                <hr class="d-lg-none mt-3 mb-2">
                <ul class="navbar-nav">
                    <router-link to="/">
                        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    </router-link>
                    <router-link :to="{ name: 'dashboard'}">
                        <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
                    </router-link>
                </ul>
            </div>
        </div>
    </header>




    <router-view/>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Api from "@/common/Api";



@Options({
    components: {
    },
    methods: {
        loggedIn(){
            return this.token;
        },
        logout(){
            console.info(this.user);

            Api.post('logout', {},{headers: { 'Authorization' : 'Bearer '+ this.token}}).then((res) => {
                console.info('logout');
                localStorage.removeItem('token');
                this.$router.push({name: 'home'});
            }).catch(() => {
                console.info('error');
            })
        }
    }
})

export default class App extends Vue{
    data() {
        return {
            user: null,
            token: localStorage.getItem('token')
        }
    }

    mounted() {
        Api.get('user', {headers: { 'Authorization' : 'Bearer '+ this.token}}).then((res) => {
            this.user = res.data;
        }).catch((errors) => {
            console.info(errors);
        })
    }
}

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    /*#nav {*/
    /*    padding: 30px;*/
    /*}*/

    /*#nav a {*/
    /*    font-weight: bold;*/
    /*    color: #2c3e50;*/
    /*}*/

    /*#nav a.router-link-exact-active {*/
    /*    color: #42b983;*/
    /*}*/
</style>
