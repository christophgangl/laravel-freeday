<template>
    <div class="container">
        <div class="row align-items-center justify-content-center fill">
            <div class="col"></div>
            <div class="col-6">
                <form action="#" @submit.prevent="login()">
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating mb-3">
                        <input v-model="form.email" type="email" class="form-control" id="InputEmail" placeholder="Email Address">
                        <label for="InputEmail">Email Address</label>
                        <p class="text-danger" v-text="errors.email"></p>
                    </div>
                    <div class="form-floating mb-3">
                        <input v-model="form.password" type="password" class="form-control" id="InputPassword" placeholder="Password">
                        <label for="InputPassword">Password</label>
                        <p class="text-danger" v-text="errors.password"></p>
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
import {Options, Vue} from "vue-class-component";
import {mapActions} from "vuex";
// import Api from "@/common/Api";

@Options({
    components: {
    },
    methods: {
        // doLogin() {
        //     Api.post('login', this.form).then((res) => {
        //         console.info('login', this.form);
        //         localStorage.setItem('token', res.data)
        //         this.$router.push({name: 'dashboard'});
        //     }).catch((error) => {
        //         console.info('error');
        //         this.errors = error.response.data.errors;
        //     })
        // }

        // login() {
        //     this.$store.dispatch('authUser/loginUser', this.form);
        // },

        ...mapActions('authentication', ['loginUser'])
    }
})

export default class Login extends Vue{
    data() {
        return {
            form: {
                email: '',
                password: '',
                device_name: 'browser',
            },
            errors: {}
        }
    }

    login() {
        console.info('login', this.form);
        this.loginUser(this.form);
    }
}
</script>

<style scoped>
.fill {
    height: 90vh;
}
</style>