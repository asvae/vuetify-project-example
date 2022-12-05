import { setupLayouts } from 'virtual:generated-layouts'
import {
  createMemoryHistory,
  createRouter,
} from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
