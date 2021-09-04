export default function ({
  $axios,
  store,
  redirect
}, inject) {
  const api = $axios.create()

  const baseApi = $axios.create()

  const blogApi = $axios.create()

  api.setBaseURL('https://shirazsuf.ir/api/v1/')
  baseApi.setBaseURL('https://shirazsuf.ir/api/v1/')
  blogApi.setBaseURL('https://shirazsuf.ir/')

  api.onRequest(config => {
    config.headers.common['Authorization'] = `Token ${store.state.token}`
    store.commit('setIsLoading', true)
    console.log("req", store.state.isLoading);
  })
  api.onResponse(response => {
    store.commit('setIsLoading', false)
    console.log("respo", store.state.isLoading);
  })
  api.onError(error => {
    store.commit('setIsLoading', false)
    console.log("err", store.state.isLoading);
  })

  baseApi.onRequest(config => {
    store.commit('setIsLoading', true)
    console.log("req", store.state.isLoading);
  })
  baseApi.onResponse(response => {
    store.commit('setIsLoading', false)
    console.log("respo", store.state.isLoading);
  })
  baseApi.onError(error => {
    store.commit('setIsLoading', false)
    console.log("err", store.state.isLoading);
  })

  inject('blogApi', blogApi)
  inject('baseApi', baseApi)
  inject('api', api)
}