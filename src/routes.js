const Posts = resolve => require(['./components/Posts.vue'], resolve)
const Post = resolve => require(['./components/Post.vue'], resolve)
const PostsByPage = resolve => require(['./components/PostsByPage.vue'], resolve)
const Error404 = resolve => require(['./components/Error404.vue'], resolve)
import vars from './variables'
const categories = vars.keyword + '/categories/'
const tags = vars.keyword + '/tags/'
const sentiment = vars.keyword + '/sentiment/'

const routes = [
  { path: '', component: Posts },
  { path: '/page/:page/', component: PostsByPage },
  { path: '/:postSlug/', component: Post },
  { path: '/tag/:tagSlug/', component: Post },
  { path: '/source/:catSlug/', component: Post },
  { path: categories, component: Post },
  { path: tags, component: Post },
  { path: sentiment, component: Post },
  { path: '*', component: Error404 }
]

export default routes
