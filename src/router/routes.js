
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: "home", path: '', component: () => import('pages/Index.vue') },
      { name: "login", path: '/login', component: () => import('pages/Auth.vue') },
      { name: "private", path : '/private', component: () => import('pages/Private.vue'), meta: { requiresAuth: true }}
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
