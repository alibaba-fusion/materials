import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';

const routes = [{
  path: '/about',
  component: About,
}, {
  path: '/login',
  component: Login,
}, {
  path: '/',
  exact: true,
  component: Home,
}, {
  component: NotFound,
}];

export default routes;
