<template>
  <div class="navigate mobile_nav">
    <p class="navigate__user_name">
      {{ userInfo.first_name }} {{ userInfo.last_name }}
    </p>

    <div class="navigate__buttons">
      <NavBtn
        title="پروفایل"
        v-on:clicked="navClicked('profile')"
        :path="profile"
        :pathSelected="profileSelected"
        :selected="current === 'profile'"
        :red="false"
      />
      <NavBtn
        title="رزرواسیون"
        v-on:clicked="navClicked('reservation')"
        :path="reservation"
        :pathSelected="reservationSelected"
        :selected="current === 'reservation'"
        :red="false"
      />
      <NavBtn
        title="تاریخچه‌ی رزرو"
        v-on:clicked="navClicked('history')"
        :path="history"
        :pathSelected="historySelected"
        :selected="current === 'history'"
        :red="false"
      />
      <MsgNavBtn
        title="‌پیام‌ها"
        v-on:clicked="navClicked('messages')"
        :hasUnreadMsg="hasUnread"
        :path="messages"
        :pathSelected="messagesSelected"
        :selected="current === 'messages'"
        :red="false"
      />
      <NavBtn
        class="navigate__buttons__logout"
        v-on:clicked="navClicked('logout')"
        title="خروج"
        :path="logout"
        :pathSelected="logout"
        :selected="false"
        :red="true"
      />
    </div>
  </div>
</template>

<script>
import NavBtn from "~/components/dashboard/NavigateButton.vue";
import MsgNavBtn from "~/components/dashboard/MessageMenuItem.vue";
import { mapState } from "vuex";
import {mapActions} from 'vuex';
// import {Bus} from 'vue'
export default {
  components: {
    NavBtn,
    MsgNavBtn
  },
  fetch() {},
  data() {
    return {
      hasUnread: false,
      userInfoLocal: {},
      profile: require("~/assets/images/profile.svg"),
      reservation: require("~/assets/images/reservation.svg"),
      history: require("~/assets/images/history.svg"),
      logout: require("~/assets/images/logout.svg"),
      profileSelected: require("~/assets/images/profile-selected.svg"),
      reservationSelected: require("~/assets/images/reservation-selected.svg"),
      historySelected: require("~/assets/images/history-selected.svg"),
      messagesSelected: require("~/assets/images/message_selected.svg"),
      messages: require("~/assets/images/message.svg"),
      current: "profile"
    };
  },
  props: {
    // hasUnread: {
    //   type: Boolean
    // }
  },
  methods: {
    ...mapActions(['retrieveMessages']),
    navClicked(nav) {
      this.current = nav;
      this.$emit("navClicked", nav);
    },
    checkHasUnreadMsg() {
      this.retrieveMessages()
        .then(res => {
          let unreadMessages = res.filter((msg) => !msg.is_read)
          this.hasUnread = unreadMessages.length !== 0
          console.log("meseg", this.hasUnread);
          
        })
        .catch(err => {
          this.hasUnread = false ;
          console.log("meseg", err);
        });
    }
  },
  watch: {
    userToken(){
      if (this.userToken){
        this.checkHasUnreadMsg();
      }
    }
  },
  computed: {
    ...mapState(["userInfo", "token"]),
    userToken() {
      return this.token;
    }
  },
  mounted () {
    this.$nuxt.$on('messagesRead', () => {
      this.hasUnread = false
    })
  },
};
</script>
