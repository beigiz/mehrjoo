<template>
    <div class="auth">
        <HomeBtn class="auth__home_btn fade-in"
            v-on:goToHome="goHome()"/>
        <div class="auth__content">
            <a-row class="fade-in" type="flex" justify="space-around" align="middle">
                <a-col :xl="8" :md="16" :sm="24" :xs="24" class="auth__content__form">
                  <transition name="fade" mode="out-in">
                    <Login v-if="state === 'login'" :key="1"
                      v-on:sendPhoneNumber="loginUser($event)" 
                      :phoneNumberFromBack="phoneNumber"
                      :errorTextEnable="loginError"
                      :errorText="loginErrorText"/>
                    <Verify v-if="state === 'verify'" :key="2"
                      v-on:backToLogin="backToLogin($event)"
                      v-on:verifyCode="verifyCode($event)"
                      :phoneNumber="phoneNumber"
                      :errorTextEnable="verificationError"
                      :errorText="verificationErrorText"/>
                    <Register v-if="state === 'register'" :key="3"
                      v-on:register="registerUser($event)"
                      :errorTextEnable="registerError"
                      :errorText="registerErrorText"/>
                  </transition>
                </a-col>
                <a-col class="ss" :xl="8" :md="8" :sm="0" :xs="0">
                        <img class="auth__content__image_container__image" src="~assets/images/workSpace1.png">
                </a-col>
            </a-row>
        </div>

    </div>
</template>

<script>
import Login from "~/components/auth/Login.vue";
import HomeBtn from "~/components/auth/HomeButton.vue";
import Verify from "~/components/auth/Verify.vue";
import Register from "~/components/auth/Register.vue";
import {mapActions , mapState} from 'vuex';

export default {
    middleware({store, redirect}){
        //of on route change === process.client
        //chun age samte server bashe store hamishe khalie, key samte servere? vaghti on refresh bashe, k on refresh ro toye mounted handle kardim(be jaye cookie)
        // todo does not work
        if (process.client && store.state.token != null) {
            redirect('/dashboard')
        }
    },
    components: {
        Login,
        HomeBtn,
    },
    data(){
        return{
            state: 'login',
            phoneNumber: '',
            verificationError: false,
            loginError: false,
            registerError: false,
            loginErrorText: 'خطایی رخ داده است لطفا دوباره امتحان کنید',
            verificationErrorText: 'خطایی رخ داده است لطفا دوباره امتحان کنید',
            registerErrorText: 'خطایی رخ داده است لطفا دوباره امتحان کنید',
        }

    },
    methods:{
        ...mapActions(['login', 'verify', 'editProfile', 'getState']),
        convertPersian(str){
        let
        persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
        arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]
          if(typeof str === 'string'){
            for(let i=0; i<10; i++){
              str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
          }
          return str;
        },
        loginUser: function(phoneNumber){
          phoneNumber = this.convertPersian(phoneNumber)
          let validation = /^(\0|0)?9\d{9}$/g
          if (phoneNumber.match(validation)){
              this.phoneNumber = phoneNumber
              this.login(this.phoneNumber).then(
              res =>{
                this.loginError = false
                  this.state = 'verify'
                  console.log("login success")
              }).catch(err => {
                  this.loginError = true
                  if (err.response == undefined){
                    this.loginErrorText = '.اینترنت شما ضعیف است دوباره امتحان کنید'
                  }
                  if (err.response.status == 403){
                      this.loginErrorText = '.برای ورود با این شماره دقایقی دیگر امتحان کنید'
                  }
                  console.log("login noooot success", err.response.status)
              })
          }
          else{
              this.loginError = true
              this.loginErrorText = '.لطفا شماره تلفن را با فرمت ۰۹۱۲ ۳۴۵ ۶۷۸۹ وارد کنید'
          }
        },
        backToLogin: function(phoneNumber){
          this.verificationError = false
            this.phoneNumber = phoneNumber
            this.state = 'login';
        },
        verifyCode: function(code){
            let data = {
                "phone_number": this.phoneNumber,
                "code": code
            }
            console.log(data)
            this.verify(data)
            .then(res => {
                this.getState().then(resState => {
                    if (resState.first_name == null & resState.last_name == null){
                      this.verificationError = false
                      this.state = 'register'
                    }
                    else{
                      this.$router.push({path: 'dashboard'})
                    }
                })
                .catch(err => {
                  if (err.response == undefined){
                    this.verificationError = true
                    this.verificationErrorText = '.اینترنت شما ضعیف است دوباره امتحان کنید'
                  }
                  console.log("get state not successful", err)   
                })
            }).catch(erro =>{
              this.verificationErrorText = '.کد تایید وارد شده اشتباه است'
                this.verificationError = true
                if (err.response == undefined){
                    this.verificationErrorText = '.اینترنت شما ضعیف است دوباره امتحان کنید'
                }
            })
        },
        registerUser: function(data){
            data.phone_number = this.phoneNumber
            this.editProfile(data).then( res=> {
              this.registerError = false
                this.$router.push({path: '/dashboard'});
                this.$store.commit('')
            }).catch(res => {
              if (err.response == undefined){
                this.registerErrorText = '.اینترنت شما ضعیف است دوباره امتحان کنید'
              }
              this.registerError = true
            })
            
        },
        goHome: function(){
            this.$router.push({path: '/'});
        }
    },
    computed: {
    },
    updated () {
      // this.loginError = false
      // this.verificationError = false
      // this.registerError =
    },
}
</script>