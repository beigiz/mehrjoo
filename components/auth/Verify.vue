<template>

    <div class="flex_col_center verify">

        <div class="verify__header">
            <h2 class="verify__header__title">ورود</h2>
            <img class="verify__header__icon" src="~assets/images/login.svg">
        </div>
    
        <div class="verify__form">
            <p class="verify__form__title">.کد ارسال شده به شماره زیر را وارد کنید</p>
            <div class="verify__form__phone_number_container">
                <p class="verify__form__phone_number_container__phone_number">{{phoneNumber}}</p>
                <a class="verify__form__phone_number_container__change_number" v-on:click="backToLogin()">تعویض شماره</a>
            </div>
            <a-input v-model="code"
                class="verify__form__code"
                type="tel"
                pattern="/^(\+98|0)?9\d{9}$/"
                placeholder="123456"
                allow-clear
                size="large">
            </a-input>

            <a-button class="verify__form__button" size="large" type="primary" block v-on:click="verify()" :loading="isLoading">
                تایید
            </a-button>
            <p v-if="errorTextEnable" class="verify__form__error">
                {{errorText}}
            </p>

        </div>
    </div>

    
</template>



<script>
import {mapState} from 'vuex';
export default {
    data() {
        return{
            code: '',
        }
    },

    props:{
        phoneNumber:{
            type: String,
            required: true
        },
        errorTextEnable: {
            type: Boolean
        },
        errorText: {
            type: String
        },
    },
    methods:{
        backToLogin: function(){
            this.$emit('backToLogin', this.phoneNumber);
        },
        verify: function(){
            this.$emit('verifyCode', this.code);
        }
    },
    computed: {
        ...mapState(['debugCode', 'isLoading']),
        getCode(){
            console.log("computed", this.debugCode)
            return this.debugCode
        }
    },
    mounted() {
        console.log("mounted")
        this.code = this.getCode
    }

}
</script>
