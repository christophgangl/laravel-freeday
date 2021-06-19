<template>
    <div class="container">
        <h1>Dashboard</h1> <br>
        User: {{user}} <br>
        <button @click.prevent="logout"></button>
    </div>
</template>

<script>
import {Options, Vue} from "vue-class-component";
import Api from "@/common/Api";

@Options({
    components: {
    },
    methods: {
        logout(){
            Api.post('logout').then(() => {
                this.$router.push({name: 'home'})
            })
        }
    }
})

export default class Dashboard extends Vue{
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

<style scoped>

</style>