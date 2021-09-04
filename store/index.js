import {
  message
} from "ant-design-vue";
export const state = () => ({
  // token: localStorage.getItem('token') ? localStorage.get('token'): null,
  token: null,
  reservationHistory: [],
  debugCode: null,
  isLoading: false,
  userInfo: {},
  messages: [],
  articles: []
})

export const mutations = {
  setToken(state, newToken) {
    localStorage.setItem('token', newToken)
    state.token = newToken
  },
  setPhoneNumber(state, phoneNumber) {
    state.phoneNumber = phoneNumber
  },
  unsetToken(state) {
    localStorage.removeItem('token')
    state.token = null;
  },
  setUserInfo(state, data) {
    state.userInfo = data
  },
  updateUserData(state, data) {
    let phone;
    if (state.userInfo.phone_number != undefined) phone = state.userInfo.phone_number
    state.userInfo = data
    if (state.userInfo.phone_number != undefined) state.userInfo['phone_number'] = phone
  },
  unsetUserInfo(state) {
    state.userInfo = {}
  },
  setReservasionHistory(state, data) {
    state.reservationHistory = data
  },
  setMessages(state, data) {
    state.reservationHistory = data
  },
  setCode(state, data) {
    state.debugCode = data
  },
  setIsLoading(state, data) {
    state.isLoading = data
  },
  setArticles(state, data) {
    state.articles = data
  }
}

export const actions = {
  login({
    commit
  }, phone_number) {
    return new Promise((resolve, reject) => {
      this.$baseApi.$post('user-profile/send-code/', {
        phone_number
      }).then(res => {
        console.log("res", res)
        commit('setCode', res.code)
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  logout({
    commit
  }) {
    commit('unsetToken');
    commit('unsetUserData');
  },
  verify({
    commit,
    state
  }, payload) {
    return new Promise((resolve, reject) => {
      this.$baseApi.$post('user-profile/verify-phone/', payload).then(res => {
        commit('setToken', res.token)
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  getState({
    commit,
    state
  }) {
    console.log("getState")
    return new Promise((resolve, reject) => {
      this.$api.$get('user-profile/retrieve-data/', state.phone_number).then(res => {
        console.log("check registeer", res)
        commit('setUserInfo', res)
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  editProfile({
    commit,
    state
  }, payload) {
    return new Promise((resolve, reject) => {
      this.$api.$put('user-profile/edit/', payload).then(res => {
        console.log("edit profile res", res)
        commit('updateUserData', payload)
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  getRooms({
    commit,
    state
  }, date) {
    console.log("get rooms")
    return new Promise((resolve, reject) => {
      this.$api.$post('search/', {
        date
      }).then(res => {
        console.log("search room based on date res", res)
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  searchDiscount({
    commit,
    state
  }, time) {
    return new Promise((resolve, reject) => {
      this.$api.$post('discount/validate/', time).then(res => {
        console.log()
        console.log("send time res", res)
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  reservationCreate({
    commit,
    state
  }, time) {
    return new Promise((resolve, reject) => {
      this.$api.$post('reservation/create/', time).then(res => {
        console.log("send time res", res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  retrieveReservationHistory({
    commit,
    state
  }) {
    console.log("reservations token", state.token);
    return new Promise((resolve, reject) => {
      this.$api.$get('user-profile/reservations/').then(res => {
        console.log("reservations", res)
        commit('setReservasionHistory', res)
        resolve(res)
      }).catch(err => {
        console.log("reservations", err)
        reject(err)
      })
    })
  },
  retrieveMessages({
    commit,
    state
  }) {
    console.log("messages token", state.token);
    return new Promise((resolve, reject) => {
      this.$api.$get('user-profile/messages/').then(res => {
        console.log("reservations", res)
        commit('setMessages', res)
        resolve(res)
      }).catch(err => {
        console.log("reservations", err)
        reject(err)
      })
    })
  },
  readMessage({
    commit,
    state
  }, id) {
    return new Promise((resolve, reject) => {
      console.log("msg index", id);
      this.$api.$put('user-profile/messages/' + id + "/", {
        is_read: true
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  unreadMessage({
    commit,
    state
  }, id) {
    return new Promise((resolve, reject) => {
      console.log("msg index", id);
      this.$api.$put('user-profile/messages/' + id + "/", {
        is_read: false
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  sendRequest(context, payload) {
    const key = "updatable";
    message.loading({
      content: "...درحال ارسال درخواست شما",
      key
    });

    this.$baseApi
      .$post("send-mail/", payload)
      .then(res => {
        message.success({
          content: "!درخواست شما برای ما ارسال گردید، با سپاس",
          key,
          duration: 2
        });
      })
      .catch(err => {
        message.error({
          content: "!مشکلی در ارسال درخواست به وجود آمد لطفا از پر بودن فیلدها مطمئن شده و درخواست خود را دوباره ارسال فرمایید",
          key,
          duration: 4
        });
      });
  }
}
