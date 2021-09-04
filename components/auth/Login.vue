<template>

    <div class="flex_col_center login">

        <div class="login__header">
            <h2 class="login__header__title">ورود</h2>
            <img class="login__header__icon" src="~assets/images/login.svg">
        </div>
    
        <div class="login__form">
            <p class="login__form__title" >.شماره تلفن خود را وارد کنید</p>
            <a-input class="login__form__phoneNumber"
                v-model="phoneNumber"
                type="tel"
                placeholder="09123456789"
                allow-clear
                size="large">
            </a-input>
            <a-button class="login__form__button" size="large" type="primary" block v-on:click="login" :loading="isLoading">
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
            phoneNumber: this.phoneNumberFromBack,
        }
    },

    methods: {
        login: function(){
            this.$emit('sendPhoneNumber', this.phoneNumber);
        }
    },

    props:{
        phoneNumberFromBack: {
            type: String
        },
        errorTextEnable: {
            type: Boolean
        },
        errorText: {
            type: String
        },
        disableButton: {
            type: Boolean
        },
    },
    computed: {
        ...mapState(['isLoading']),

    }
}
</script>
