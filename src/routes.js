const Posts = resolve => require(['./components/Posts.vue'], resolve)
const Post = resolve => require(['./components/Post.vue'], resolve)
const PostsByPage = resolve => require(['./components/PostsByPage.vue'], resolve)
const Error404 = resolve => require(['./components/Error404.vue'], resolve)
const PostsByCat = resolve => require(['./components/PostsByCat.vue'], resolve)
const PostsByTag = resolve => require(['./components/PostsByTag.vue'], resolve)
const PostsByCatPaged = resolve => require(['./components/PostsByCatPaged.vue'], resolve)
const PostsByTagPaged = resolve => require(['./components/PostsByTagPaged.vue'], resolve)
const PopularPosts = resolve => require(['./components/PopularPosts.vue'], resolve)
const PopularPostsPaged = resolve => require(['./components/PopularPostsPaged.vue'], resolve)
const Categories = resolve => require(['./components/Categories.vue'], resolve)
const Tags = resolve => require(['./components/Tags.vue'], resolve)
const CategoriesPaged = resolve => require(['./components/CategoriesPaged.vue'], resolve)
const TagsPaged = resolve => require(['./components/TagsPaged.vue'], resolve)
const Sentiment = resolve => require(['./components/Sentiment.vue'], resolve)
const Today = resolve => require(['./components/Today.vue'], resolve)
const TodayPaged = resolve => require(['./components/TodayPaged.vue'], resolve)

import vars from './variables'
const categories = vars.keyword + '/categories/'
const tags = vars.keyword + '/tags/'
const sentiment = vars.keyword + '/sentiment/'
const today = vars.keyword + '/today/'
const popular = vars.keyword + '/popular/'

const routes = [
  { path: '', component: Posts },
  { path: '/page/:page/', component: PostsByPage },
  { path: '/:postSlug/', component: Post },
  { path: '/tag/:tagSlug/', component: PostsByTag },
  { path: '/source/:catSlug/', component: PostsByCat },
  { path: '/tag/:tagSlug/page/:page/', component: PostsByTagPaged },
  { path: '/source/:catSlug/page/:page/', component: PostsByCatPaged },
  { path: popular, component: PopularPosts },
  { path: popular + 'page/:page/', component: PopularPostsPaged },
  { path: categories, component: Categories },
  { path: tags, component: Tags },
  { path: categories + 'page/:page/', component: CategoriesPaged },
  { path: tags + 'page/:page/', component: TagsPaged },
  { path: sentiment, component: Sentiment },
  { path: today, component: Today },
  { path: today + 'page/:page/', component: TodayPaged },
  { path: '*', component: Error404 }
]

export default routes
