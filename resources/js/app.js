/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

require('../../resources/assets/admin_assets/plugins/jquery/jquery.min.js');
require('../../resources/assets/admin_assets/plugins/jquery-ui/jquery-ui.min.js');
require('../../resources/assets/admin_assets/plugins/bootstrap/js/bootstrap.bundle.min.js');
require('../../resources/assets/admin_assets/plugins/sparklines/sparkline.js');
require('../../resources/assets/admin_assets/plugins/jqvmap/jquery.vmap.min.js');
require('../../resources/assets/admin_assets/plugins/jqvmap/maps/jquery.vmap.usa.js');
require('../../resources/assets/admin_assets/plugins/jquery-knob/jquery.knob.min.js');
require('../../resources/assets/admin_assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js');
require('../../resources/assets/admin_assets/plugins/summernote/summernote-bs4.min.js');
require('../../resources/assets/admin_assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js');
require('../../resources/assets/admin_assets/js/adminlte.js');
require('../../resources/assets/admin_assets/js/demo.js');
require('../../resources/assets/admin_assets/js/pages/dashboard.js');


window.Vue = require('vue').default;
/*import Vue from 'vue/dist/vue'
window.Vue = Vue;*/

import App from './components/App';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';


Vue.component('App', require('./components/App.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});

