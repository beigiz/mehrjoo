<template>

    <div class="flex_col_center register">

        <div class="register__header">
            <h2 class="register__header__title">ورود</h2>
            <img class="register__header__icon" src="~assets/images/login.svg">
        </div>
    
        <div class="register__form">
            <p class="register__form__title" >.نام و نام خانوادگی را وارد کنید</p>
            <a-input class="register__form__name"
                v-model="name"
                placeholder="نام"
                allow-clear
                size="large">
            </a-input>
            <a-input class="register__form__family"
                v-model="family"
                placeholder="نام خانوادگی"
                allow-clear
                size="large">
            </a-input>
            <a-button class="register__form__button" size="large" type="primary" block v-on:click="register" :loading="isLoading">
                تایید
            </a-button>

            <p v-if="errorTextEnable" class="login__form__error">
                {{errorText}}
            </p>

        </div>
    </div>

    
</template>



<script>
import {mapState} from 'vuex';
export default {
    data(){
        return{
            name: '',
            family: '',
        }
    },

    methods: {
        register: function(){
            let userData = {
                "first_name": this.name,
                "last_name": this.family
            }
            this.$emit('register', userData);
        }
    },
    computed: {
        ...mapState(['isLoading']),
    },
    props: {

        errorTextEnable: {
            type: Boolean
        },
        errorText: {
            type: String
        },
    }

}
</script>
