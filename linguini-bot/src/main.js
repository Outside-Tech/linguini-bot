import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/firebase-functions";
import "firebase/firebase-storage";
import axios from "axios";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

var config = {
  apiKey: "AIzaSyBuftmhZ4w-9DJ0Bs3j-zhnMWphf3cgf3c",
  authDomain: "fibonacci-chatbot.firebaseapp.com",
  databaseURL: "https://fibonacci-chatbot.firebaseio.com",
  projectId: "fibonacci-chatbot",
  storageBucket: "fibonacci-chatbot.appspot.com",
  messagingSenderId: "621008408240",
  appId: "1:621008408240:web:387918bc90501d29547575",
  measurementId: "G-1W8P8JMSLW",
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.functions();

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
