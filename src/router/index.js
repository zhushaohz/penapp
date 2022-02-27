import { createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
  history:createWebHashHistory(),
  routes: [
    { path: '/',component: () => import('../views/Home.vue') },
    { path: '/about',name: 'about',component: () => import('../views/About.vue') },
    {
      path: '/riskidentification',
      name: 'riskide',
      redirect:'/riskidentification/casestudy',
      component: () => import('../views/RiskIdentification.vue') ,
      children: [
        {
          path: '/',
          component: () => import('../components/CaseStudy.vue')
        },
        {
          path: 'casestudy',
          name: 'casestudy',
          component: () => import('../components/CaseStudy.vue')
        },
        {
          path: 'risklist',
          name: 'risklist',
          component: () => import('../components/RiskList.vue')
        },
        {
          path: 'accidenttree',
          name: 'accidenttree',
          component: () => import('../components/AccidentTree.vue')
        }
      ]
    },
    { path: '/riskanalysis',name: 'riskana',component: () => import('../views/RiskAnalysis.vue') }
  ]
});

export default router
