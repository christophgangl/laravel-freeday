import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import '../bootstrap_theme/dist/css/theme.min.css'
import '../bootstrap_theme/dist/vendor/simplebar/dist/simplebar.min.css'
import '../bootstrap_theme/dist/vendor/tiny-slider/dist/tiny-slider.css'
import '../bootstrap_theme/dist/vendor/prismjs/themes/prism.css'
import '../bootstrap_theme/dist/vendor/prismjs/plugins/toolbar/prism-toolbar.css'
import '../bootstrap_theme/dist/vendor/prismjs/plugins/line-numbers/prism-line-numbers.css'




// import * as Theme from './../../../js/theme.min.js'

// const bootstrap_theme = require('../bootstrap_theme/dist/js/theme.min') // eslint-disable


// import '../bootstrap_theme/dist/js/theme.min'
// import '../bootstrap_theme/dist/vendor/bootstrap/dist/js/bootstrap.bundle.min'
// import '../bootstrap_theme/dist/vendor/simplebar/dist/simplebar.min'
// import '../bootstrap_theme/dist/vendor/tiny-slider/dist/min/tiny-slider'
// import '../bootstrap_theme/dist/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min'
// import '../bootstrap_theme/dist/vendor/prismjs/components/prism-core.min'
// import '../bootstrap_theme/dist/vendor/prismjs/components/prism-markup.min'
// import '../bootstrap_theme/dist/vendor/prismjs/components/prism-clike.min'
// import '../bootstrap_theme/dist/vendor/prismjs/components/prism-javascript.min'
// import '../bootstrap_theme/dist/vendor/prismjs/components/prism-pug.min'
// import '../bootstrap_theme/dist/vendor/prismjs/plugins/toolbar/prism-toolbar.min'
// import '../bootstrap_theme/dist/vendor/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min'
// import '../bootstrap_theme/dist/vendor/prismjs/plugins/line-numbers/prism-line-numbers.min'

// createApp(App).use(store).use(router).use(Theme).mount('#app')
createApp(App).use(store).use(router).mount('#app')
