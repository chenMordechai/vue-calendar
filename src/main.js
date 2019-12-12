import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import TextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app';
import 'firebase/firestore';
import {apiKey} from '../apiKey.js'
Vue.use(TextareaAutosize)
Vue.config.productionTip = false
firebase.initializeApp({ 
  apiKey: apiKey ,
    authDomain: "vue-calender-6bbcb.firebaseapp.com",
    databaseURL: "https://vue-calender-6bbcb.firebaseio.com",
    projectId: "vue-calender-6bbcb",
    storageBucket: "vue-calender-6bbcb.appspot.com",
    messagingSenderId: "34665122106",
    appId: "1:34665122106:web:44f3f9cbed6ea970366803"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
