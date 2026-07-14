import { createApp } from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import MultiSelect from 'vue-multiselect'
import App from './App.vue'
import Modal from './components/Modal.vue'
import { showModal, hideModal } from './modal'

const app = createApp(App)
app.use(VueToast, { position: 'top-right', duration: 5000 });
app.component('MultiSelect', MultiSelect)
app.component('app-modal', Modal)
app.config.globalProperties.$modal = { show: showModal, hide: hideModal }

app.mount('#app')
