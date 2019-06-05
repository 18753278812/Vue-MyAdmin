import router from '@/router'
import { auth_login } from '@/utils/auth'


const whiteList = ['/']
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    if (!auth_login()) {
      next()
    } else {
      next({path: '/'})
    }
  }
})
