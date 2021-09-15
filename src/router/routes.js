
const routes = [
  {
    name: "auth",
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Auth.page.vue') },
      { name: "login", path: '/login', component: () => import('src/pages/Login.page.vue') },
      { name: "register", path: '/register', component: () => import('src/pages/Register.page.vue') },
      { name: "private", path: 'private', component: () => import('src/pages/Private.page.vue'), meta: { requiresAuth: true }},
      { name: "forgot-password", path: '/forgot-password', component: () => import('src/pages/Auth/ForgotPassword.page.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Error404.page.vue')
  }
]

export default routes
