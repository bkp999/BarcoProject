import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import UserAlbums from '@/components/UserAlbums'
import AlbumPhotos from '@/components/AlbumPhotos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'UserAlbums',
      component: UserAlbums
    },
    {
      path: '/album/:id',
      name: 'AlbumPhotos',
      component: AlbumPhotos
    }
  ]
})
