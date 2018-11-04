import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import ChatRoom from '@/components/ChatRoom';

import { checkLoggedIn } from './utils/auth';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        checkLoggedIn()
        .then( response => {
          response ?
          window.location.href = "#/chat" :
          next(); 
        });        
      }
    },
    {
      path: '/chat',
      name: 'ChatRoom',
      component: ChatRoom,
      beforeEnter: (to, from, next) => {
        checkLoggedIn()
        .then( response => {
          response ?
          next() : 
          window.location.href = "/";
        });   
      }
    },
  ]
})