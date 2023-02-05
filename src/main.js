import { createApp } from 'vue'
import App from './App.vue'
import './assets/app.css'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Tooltip from 'primevue/tooltip';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import kasus from './store';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';

const app = createApp(App);
app.component('MultiSelect',MultiSelect);
app.component('Button',Button);
app.component('Dropdown',Dropdown);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('ColumnGroup',ColumnGroup);
app.component('Row',Row);
app.component('InputText',InputText);
app.component('Avatar',Avatar);
app.directive('tooltip', Tooltip);
app.component('Menu',Menu);
app.use(kasus);
app.use(router);
app.use(PrimeVue);
 app.mount('#app')
