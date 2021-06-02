<template>
    <div class="container">
        <div class="row align-items-center justify-content-center fill">
            <div class="col"></div>
            <div class="col-6">
                <form>
                    <!--            <form action="#" @submit.prevent="login()">-->

                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating mb-3">
                        <input v-model="form.email" type="email" class="form-control" id="InputEmail" placeholder="Email Address">
                        <label for="InputEmail">Email Address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input v-model="form.password" type="password" class="form-control" id="InputPassword" placeholder="Password">
                        <label for="InputPassword">Password</label>
                    </div>


<!--                    <div class="checkbox mb-3">-->
<!--                        <label>-->
<!--                            <input type="checkbox" value="remember-me"> Remember me-->
<!--                        </label>-->
<!--                    </div>-->
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
                </form>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
import {Vue} from "vue-class-component";

export default class Login extends Vue{
    data() {
        return {
            form: {
                email: '',
                password: '',
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