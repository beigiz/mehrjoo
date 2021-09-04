<template>
    <div class="profile">
        <a-spin :spinning="isLoading">
        <TitleDashboard class="profile__title" title="پروفایل" :path="icon"/>
        <a-row>
            <a-col class="profile__form" :xl="{ span: 12, offset:5 }" :lg="{ span: 16, offset: 4 }" :sm="{ span: 20, offset: 2 }" :xs="{ span: 22, offset: 1 }">
                <a-form layout="horizontal">
                    <a-form-item dir="rtl" class="" label="شماره تلفن">
                        <a-input disabled allow-clear size="large" v-model="userInfoLocal.phone_number"
                            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"/>
                    </a-form-item>
                    <a-form-item dir="rtl" class="" label="نام">
                        <a-input allow-clear size="large" v-model="userInfoLocal.first_name"
                            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"/>
                    </a-form-item>
                    <a-form-item dir="rtl" class="" label="نام خانوادگی">
                        <a-input allow-clear size="large" v-model="userInfoLocal.last_name"
                            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"/>
                    </a-form-item>
                    <a-form-item dir="rtl" class="" label="ایمیل">
                        <a-input allow-clear size="large" v-model="userInfoLocal.email"
                            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"/>
                    </a-form-item>
                    <a-form-item class="profile__form__container_button">
                        <a-button class="profile__form__container_button__submit_button" size="large" block type="primary" html-type="submit" @click="edit" :loading="isLoading">
                            ثبت تغییرات
                        </a-button>
                    </a-form-item>
                </a-form>
                <p class="profile__form__error" v-if="errorTextShow">خطایی رخ داده است دوباره امتحان کنید</p>
            </a-col>
        </a-row>
    </a-spin>
    </div>
</template>

<script>
import TitleDashboard from "~/components/dashboard/TitleDashboard.vue";
import {mapState} from 'vuex';
import {mapActions} from 'vuex';
export default {
    components: {
        TitleDashboard,
    },
    data() {
        return{
            icon: require('~/assets/images/profile-title.svg'),
            userInfoLocal: {},
            firstNameInput: '',
            lastNameInput: '',
            phoneNumberInput: '',
            emailInput: '',
            errorTextShow: false,
            successText: 'اطلاعات با موفقیت ثبت شد',
            errorText: '.خطایی رخ داده است لطفا دوباره امتحان کنید'
        } 
    },
    computed: {
        ...mapState([ 'isLoading', 'userInfo']),
   
    },
    watch: {
        userInfo: {
        immediate: true,
        handler(newValue, oldValue) {
            if(newValue.first_name != undefined) {
                console.log("edit watch", newValue);
                this.userInfoLocal = JSON.parse(JSON.stringify(newValue))
            }
        }
        }
    },
    methods: {
        ...mapActions(['editProfile']),

        getUserInfoLocal(){
            return this.userInfo
        },
        edit() {
        
            this.editProfile(this.userInfoLocal).then(res =>{
                this.$message.success(this.successText, 2.5)
                console.log("edit meth", res);
                this.$store.commit('updateUserData', res)
            }).catch(res =>{
                //todo aya niaz hast inja kari konim?
                this.$message.error(this.errorText, 2.5)
                // this.firstNameInput = this.userInfoLocal.first_name
                // this.lastNameInput = this.userInfoLocal.last_name
                // this.phoneNumberInput = this.getPhoneNumber
                // this.emailInput = this.getEmail
            })
        },
    },
    mounted () {
    },
}
</script>