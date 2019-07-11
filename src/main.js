import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()

// CSS
import './styles/reset.css'
// import './styles/base.less'   

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

 
// 工具函数
import Tool from './libs/tools'
Vue.use(Tool);

import { TabContainer, TabContainerItem, Cell, Navbar, TabItem, Range, Switch, Toast, InfiniteScroll, Button, Spinner } from 'mint-ui';

Vue.use(InfiniteScroll);
Vue.component(Spinner.name, Spinner);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.component(Range.name, Range);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.prototype.Toast = Toast

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
