import Vue from 'vue';
export default {
    install(vue) {
        vue.prototype.$EventBus = new Vue()
    }
}