import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/basic/button'
  },
  {
    path: '/basic/button',
    component: () => import('../views/basic/ButtonDemo.vue')
  },
  {
    path: '/basic/border',
    component: () => import('../views/basic/BorderDemo.vue')
  },
  {
    path: '/basic/icon',
    component: () => import('../views/basic/IconDemo.vue')
  },
  {
    path: '/basic/text',
    component: () => import('../views/basic/TextDemo.vue')
  },
  {
    path: '/form/autocomplete',
    component: () => import('../views/form/AutocompleteDemo.vue')
  },
  {
    path: '/form/checkbox',
    component: () => import('../views/form/CheckboxDemo.vue')
  },
  {
    path: '/form/datepicker',
    component: () => import('../views/form/DatePickerDemo.vue')
  },
  {
    path: '/form/input',
    component: () => import('../views/form/InputDemo.vue')
  },
  {
    path: '/form/radio',
    component: () => import('../views/form/RadioDemo.vue')
  },
  {
    path: '/form/switch',
    component: () => import('../views/form/SwitchDemo.vue')
  },
  {
    path: '/form/upload',
    component: () => import('../views/form/UploadDemo.vue')
  },
  {
    path: '/feedback/alert',
    component: () => import('../views/feedback/AlertDemo.vue')
  },
  {
    path: '/feedback/dialog',
    component: () => import('../views/feedback/DialogDemo.vue')
  },
  {
    path: '/feedback/message',
    component: () => import('../views/feedback/MessageDemo.vue')
  },
  {
    path: '/feedback/messagebox',
    component: () => import('../views/feedback/MessageBoxDemo.vue')
  },
  {
    path: '/feedback/popconfirm',
    component: () => import('../views/feedback/PopconfirmDemo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
