import Vue from 'vue';
import Router from 'vue-router';
import AuthPage from '@/components/AuthPage';
import Home from '@/components/Home';
import Edit from '@/components/Edit'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AuthPage',
      component: AuthPage,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
    }
  ],
});