import Home from '@/pages/Home';
import About from '@/pages/About';
import NotFound from '@/components/NotFound';

const routes = [{
  path: '/about',
  component: About,
}, {
  path: '/',
  exact: true,
  component: Home,
}, {
  component: NotFound,
}];

export default routes;