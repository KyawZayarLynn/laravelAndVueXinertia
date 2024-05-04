import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import Layout from './Shared/Layout'

createInertiaApp({
  resolve: name => {
    let page = require(`./Pages/${name}.vue`).default;

    page.layout ??= Layout;

    return page;
  }
  ,
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
  progress: {
    delay: 250,

    color: 'red',

    includeCSS: true,

    showSpinner: true,
  },
});