import Api from "@/common/Api";
import router from "@/router";

export const authentication = {
    namespaced: true,
    state: {
        user: {
        },
        errors: {
        }
    },
    getters: {
    },
    actions: {
        loginUser({state, commit, dispatch}, user) {
            Api.post('login', user).then((res) => {
                console.info('login', user);
                commit('setUser', user);


                localStorage.setItem('token', res.data)
                router.push({name: 'dashboard'});
            }).catch((error) => {
                console.info('error', error);
                commit('setLoginError', error);

                // this.errors = error.response.data.errors;
            })
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setLoginError(state, error) {
            state.error = error;
        }
    },
}
