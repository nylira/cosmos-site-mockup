import Vue from 'vue'
import VueRouter from 'vue-router'

// setup addons
Vue.use(VueRouter)

// enable more descriptive debug messages in the browser console
Vue.config.debug = true

// fetch the page templates
import App from './App.vue'
import PageIndex from './components/pages/Index.vue'
import PageWhitePaper from './components/pages/WhitePaper.vue'
import PagePlan from './components/pages/Plan.vue'
import PageFAQ from './components/pages/FAQ.vue'
import PageBlogIndex from './components/pages/BlogIndex.vue'
import PageBlogPost from './components/pages/BlogPost.vue'

// register the page templates with Vue
Vue.component('page-index', PageIndex)
Vue.component('page-whitepaper', PageWhitePaper)
Vue.component('page-plan', PageWhitePaper)
Vue.component('page-faq', PageFAQ)
Vue.component('page-blog-index', PageBlogIndex)
Vue.component('page-blog-post', PageBlogPost)

let router = new VueRouter({history: true})

// basic transitions
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.map({
  '/': {component: PageIndex},
  '/whitepaper': {component: PageWhitePaper},
  '/plan': {component: PagePlan},
  '/faq': {component: PageFAQ},
  '/blog': {component: PageBlogIndex},
  '/blog/:post': {component: PageBlogPost}
})

// filters
import dateLong from './filters/dateLong'
Vue.filter('dateLong', dateLong)
import dateShort from './filters/dateShort'
Vue.filter('dateShort', dateShort)
import markdown from './filters/markdown'
Vue.filter('markdown', markdown)

router.start(App, 'app')
