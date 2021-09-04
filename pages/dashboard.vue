<template>
    <div class="dashboard">
        <nuxt-link to="/"><HomeBtn class="dashboard__homeBtn"/></nuxt-link>
        <div class="dashboard__content" id="dashboard__content">
            <a-button class="dashboard__mobile_menu" type="primary" 
            :icon="(mobileMenuBtn) ? 'close' : 'menu'"
             size="large" @click="toggleMenu" />
            <keep-alive>
            <Profile v-if="state === 'profile'" :key="1" />
            <Reservation v-if="state === 'reservation'" :key="2" />
            <ReservationHistory v-if="state === 'history'" :key="3" />
            <Messages v-if="state === 'messages'" :key="4" />
            </keep-alive>
        </div>
        <CustomMenu id="dashboard__menu" class="dashboard__menu" 
            :class="{'dashboard__menu--open': mobileMenuBtn}"
         v-on:navClicked="changeNav($event)"/>
        
    </div>
</template>

<script>
import CustomMenu from "~/components/dashboard/Menu.vue";
import Profile from "~/components/dashboard/Profile.vue";
import Reservation from "~/components/dashboard/Reservation.vue";
import ReservationHistory from "~/components/dashboard/ReservationHistory.vue";
import Messages from "~/components/dashboard/Messages.vue";
import HomeBtn from "~/components/auth/HomeButton.vue";
import {mapMutations} from 'vuex';
export default {
    middleware({store, redirect}){
        //of on route change === process.client
        //todo does not work
        if (process.client && store.state.token == null) redirect('/auth')
    },

    watch: {
        data(newValue, oldValue) {
            
        }
    },
    components: {
        CustomMenu,
        Profile,
        Reservation,
        ReservationHistory,
        Messages,
        HomeBtn,
    },
    data() {
        return {
            state: "profile",
            mobileMenuBtn: false,
        }
    },
    methods: {
        ...mapMutations(['unsetToken']),
        showDeleteConfirm() {
            let __t = this
            this.$confirm({
                title: 'آیا مطمئن هستید که می‌خواهید خارج شود؟',
                content: 'برای ورود به داشبورد باید دوباره لاگین کنید',
                okText: 'بله',
                okType: 'danger',
                cancelText: 'لغو',
                onOk() {
                    //todo fix this error
                    __t.unsetToken();
                    __t.$router.replace('/auth');
                },
                onCancel() {
                    
                },
            });
        },
        changeNav(newState){
            if (newState != 'logout'){
                this.state = newState;
            }
            else{
                this.showDeleteConfirm()
            }
        },
        toggleMenu(){
            this.mobileMenuBtn = !this.mobileMenuBtn
        },
    },
    mounted(){
        let h = window.innerHeight
        console.log('h',h);
        document.getElementById('dashboard__content').style.minHeight = `${h}px` 

    }
    
}
</script>