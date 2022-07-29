import store from "./store"


export default {
    install(Vue) {
        Vue.config.globalProperties.$store = store
    }
}