
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/auth/Login.vue'), meta: { requiresAuth: false } },
      { path: 'register', component: () => import('pages/auth/Register.vue'), meta: { requiresAuth: false } },
      { path: 'profile', component: () => import('pages/auth/Profile.vue'), meta: { requiresAuth: true } },
      { path: 'accounts', component: () => import('pages/accounts/Accounts.vue'), meta: { requiresAuth: true } },
      { path: 'invoices', component: () => import('pages/accounts/Invoices.vue'), meta: { requiresAuth: true } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
