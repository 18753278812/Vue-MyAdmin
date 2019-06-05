import router from '@/router'

const whiteList = ['/', '/about']
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    next()
  }
})
