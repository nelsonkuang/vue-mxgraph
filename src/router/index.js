import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
/* Layout */
import Layout from '../views/layout/Layout'

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/graph',
      component: Layout,
      redirect: '/graph/mx-workflow',
      meta: {
        title: 'mxWorkflow',
      },
      children: [{
          path: 'mx-workflow',
          name: 'mxWorkflow',
          component: _import('graph/mxWorkflow'),
          meta: {
            title: 'mxWorkflow',
          }
        },
        {
          path: 'hello-world',
          name: 'helloWorld',
          component: _import('graph/helloWorld'),
          meta: {
            title: 'Hello World',
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/graph/mx-workflow'
    }
  ]
})
