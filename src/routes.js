import Posts from './components/Posts.vue'
import Error404 from './components/Error404.vue'

const routes = [
  { path: '', component: Posts },
  { path: '*', component: Error404 }
]

export default routes
