import { Input, Form, FormItem, Button } from 'element-ui'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

export default {
  install(Vue) {
    Vue.component('x-input', Input)
    Vue.component('x-form', Form)
    Vue.component('x-form-item', FormItem)
    Vue.component('x-button', Button)
  },
}
