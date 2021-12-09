import Home from './views/pages/home.vue'
import SearchJob from './views/pages/SearchJob.vue'
import FindCandidate from './views/pages/FindCandidate.vue'
import Companies from './views/pages/Companies.vue'
import Pricing from './views/pages/Pricing.vue'
import ContactUs from './views/pages/ContactUs.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/search-job', component: SearchJob },
  { path: '/find-candidate', component: FindCandidate },
  { path: '/companies', component: Companies },
  { path: '/price-table', component: Pricing },
  { path: '/contact-us', component: ContactUs },

];

export default routes;
