import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'

const app = createApp(App)
/*registro de componentes*/
app.component('food-item', FoodItem)
/*montado de la aplicacion*/
app.mount('#app')
