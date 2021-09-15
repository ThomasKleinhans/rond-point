
const routes = [
  {
    name: "auth",
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Auth/Auth.page.vue') },
      { name: "login", path: '/login', component: () => import('src/pages/Auth/Login.page.vue') },
      { name: "register", path: '/register', component: () => import('src/pages/Auth/Register.page.vue') },
      { name: "forgot-password", path: '/forgot-password', component: () => import('src/pages/Auth/ForgotPassword.page.vue') },
    ],
  },
  {
    name: "app",
    path: "/app",
    component: () =>('layouts/MainLayout.vue'),
    children: [
      { name: "private", path : 'private', component: () => import('src/pages/Private.page.vue')}
    ],
    meta: { requiresAuth: true }

  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Error404.page.vue')
  }
]

export default routes
