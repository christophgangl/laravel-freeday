<template>
    <div class="container-fluid px-0">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container mt-5">
            <div class="card p-3">
                <form action="#" @submit.prevent="register">
                    <div class="mb-3">
                        <label for="InputName" class="form-label">Name</label>
                        <input v-model="form.name" type="text" aria-label="" class="form-control" id="InputName" aria-describedby="nameHelp">
                    </div>
                    <div class="mb-3">
                        <label for="InputEmail" class="form-label">Email address</label>
                        <input v-model="form.email" type="email" aria-label="" class="form-control" id="InputEmail" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="InputPassword" class="form-label">Password</label>
                        <input v-model="form.password" type="password" aria-label="" class="form-control" id="InputPassword" aria-describedby="passwordHelp">
                    </div>
                    <div class="mb-3">
                        <label for="InputPasswordConfirmation" class="form-label">Password Bestätigung</label>
                        <input v-model="form.password_confirmation" type="password" aria-label="" class="form-control" id="InputPasswordConfirmation" aria-describedby="passwordHelp">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>

    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import Form from "vform/src";

import axios from "axios";

export default {
    name: 'App',
    components: {
    // HelloWorld
    },

    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            }
        }
    },

    methods: {
        register() {
            console.info(this.form);
            axios.post('/register', this.form)
                .then((response) => {
                    let attr = document.getElementById("text");
                    attr.innerHTML = response.data.message;

                    this.form.reset();
                })
        }
    }

}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

</style>
