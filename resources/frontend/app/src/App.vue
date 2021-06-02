<template>
<!--    <div id="nav">-->
<!--        <router-link to="/">Home</router-link> |-->
<!--        <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->

    <div class="container-fluid px-0">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
<!--                        <li class="nav-item dropdown">-->
<!--                            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                                Dropdown-->
<!--                            </a>-->
<!--                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">-->
<!--                                <li><a class="dropdown-item" href="#">Action</a></li>-->
<!--                                <li><a class="dropdown-item" href="#">Another action</a></li>-->
<!--                                <li><a class="dropdown-item" href="#">Something else here</a></li>-->
<!--                            </ul>-->
<!--                        </li>-->
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <router-link to="/">Home</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <router-link to="/about">About</router-link>
                            </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <router-link to="/login">Login</router-link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <router-link to="/register">Register</router-link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <router-view/>
</template>

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
