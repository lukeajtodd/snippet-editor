import Vue from 'vue';
import Editor from './Editor.vue';
import 'reset-css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Editor)
}).$mount('#app');
