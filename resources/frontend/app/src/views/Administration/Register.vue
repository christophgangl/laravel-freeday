<template>
    <div class="container">
        <div class="row align-items-center justify-content-center fill">
            <div class="col"></div>
            <div class="col-6">
                <form>
                    <!--            <form action="#" @submit.prevent="register()">-->

                    <h1 class="h3 mb-3 fw-normal">Please register</h1>

                    <div class="form-floating mb-3">
                        <input v-model="form.name" type="text" class="form-control" id="InputName" placeholder="Name">
                        <label for="InputName">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input v-model="form.email" type="email" class="form-control" id="InputEmail" placeholder="Email Address">
                        <label for="InputEmail">Email Address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input v-model="form.password" type="password" class="form-control" id="InputPassword" placeholder="Password">
                        <label for="InputPassword">Password</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input v-model="form.passwordConfirmation" type="password" class="form-control" id="InputPasswordConfirmation" placeholder="Password Confirmation">
                        <label for="InputPasswordConfirmation">Password Confirmation</label>
                    </div>

                    <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
                </form>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
import {Vue} from "vue-class-component";

export default class Register extends Vue{
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                passwordConfirmation: '',
            }
        }
    }
}
</script>

<style scoped>
.fill {
    height: 90vh;
}
</style>