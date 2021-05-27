import Home from '@/views/home'

export default [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/auth'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about'),
  },
]
