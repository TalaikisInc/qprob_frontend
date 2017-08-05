import Posts from './components/Posts.vue'
import Post from './components/Post.vue'
import PostsByCat from './components/PostsByCat.vue'
import PostsByTag from './components/PostsByTag.vue'
import Categories from './components/Categories.vue'
import Tags from './components/Tags.vue'
import Today from './components/Today.vue'
import Error404 from './components/Error404.vue'
import Home from './components/Home.vue'

export const routes = [
  { path: '', component: Home },

  { path: '/page/:page/', component: Posts },
  { path: '/:postSlug/', component: Post },
  { path: '/source/:catSlug/', component: PostsByCat },
  { path: '/tag/:tagSlug/', component: PostsByTag },
  { path: '/source/:catSlug/page/:page/', component: PostsByCat },
  { path: '/tag/:tagSlug/page/:page/', component: PostsByTag },
  { path: '/categories/', component: Categories },
  { path: '/categories/page/:page/', component: Categories },
  { path: '/tags/', component: Tags },
  { path: '/tags/page/:page/', component: Tags },
  { path: '/today/', component: Today },
  { path: '/today/page/:page/', component: Today },
  { path: '*', component: Error404 }

  /*
  missing:
  keyword + categories, paginated
  keyword + tags, padinated
  { path: '/quotes/', component: Quotes },
  { path: '/quotes/:quote/', component: Quotes },
  { path: '/funnyvideos/', component: FunnyVideos },
  { path: '/celebrities/', component: Celebs },
  */
]

export default routes
