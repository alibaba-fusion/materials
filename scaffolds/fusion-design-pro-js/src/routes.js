import { lazy } from 'ice';
import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';

const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const Solution = lazy(() => import('@/pages/Solution'));
const Analysis = lazy(() => import('@/pages/Analysis'));
const Workplace = lazy(() => import('@/pages/Workplace'));
const FormBasic = lazy(() => import('@/pages/FormBasic'));
const FormTwo = lazy(() => import('@/pages/FormTwo'));
const FormThree = lazy(() => import('@/pages/FormThree'));
const FormFour = lazy(() => import('@/pages/FormFour'));
const FormStep = lazy(() => import('@/pages/FormStep'));
const FormClassified = lazy(() => import('@/pages/FormClassified'));
const FormHierarchical = lazy(() => import('@/pages/FormHierarchical'));
const FormGroup = lazy(() => import('@/pages/FormGroup'));
const FlowGroup = lazy(() => import('@/pages/FlowGroup'));
const BasicDetailPage = lazy(() => import('@/pages/BasicDetailPage'));
const Advanced = lazy(() => import('@/pages/Advanced'));
const BasicListPage = lazy(() => import('@/pages/BasicListPage'));
const CardListPage = lazy(() => import('@/pages/CardListPage'));
const FusionFilterTable = lazy(() => import('@/pages/FusionFilterTable'));
const FusionMutilcolTable = lazy(() => import('@/pages/FusionMutilcolTable'));
const FusionSinglecolTable = lazy(() => import('@/pages/FusionSinglecolTable'));
const FusionExpandTable = lazy(() => import('@/pages/FusionExpandTable'));
const FusionActionTable = lazy(() => import('@/pages/FusionActionTable'));
const FusionMergecellTable = lazy(() => import('@/pages/FusionMergecellTable'));
const FusionSingletreeTable = lazy(() => import('@/pages/FusionSingletreeTable'));
const FusionDialogTable = lazy(() => import('@/pages/FusionDialogTable'));
const TableListPage = lazy(() => import('@/pages/TableListPage'));
const FeedbackFail = lazy(() => import('@/pages/FeedbackFail'));
const FeedbackSuccess = lazy(() => import('@/pages/FeedbackSuccess'));
const FeedbackForbidden = lazy(() => import('@/pages/FeedbackForbidden'));
const FeedbackNotFound = lazy(() => import('@/pages/FeedbackNotFound'));
const FeedbackServerError = lazy(() => import('@/pages/FeedbackServerError'));
const Settings = lazy(() => import('@/pages/Settings'));
const Person = lazy(() => import('@/pages/Person'));
const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/solution',
        component: Solution,
      },
      {
        path: '/dashboard/analysis',
        component: Analysis,
      },
      {
        path: '/dashboard/workplace',
        component: Workplace,
      },
      {
        path: '/form/basic',
        component: FormBasic,
      },
      {
        path: '/form/two',
        component: FormTwo,
      },
      {
        path: '/form/three',
        component: FormThree,
      },
      {
        path: '/form/four',
        component: FormFour,
      },
      {
        path: '/form/step',
        component: FormStep,
      },
      {
        path: '/form/classified',
        component: FormClassified,
      },
      {
        path: '/form/hierarchical',
        component: FormHierarchical,
      },
      {
        path: '/form/group',
        component: FormGroup,
      },
      {
        path: '/form/flow',
        component: FlowGroup,
      },
      {
        path: '/detail/basic',
        component: BasicDetailPage,
      },
      {
        path: '/detail/advanced',
        component: Advanced,
      },
      {
        path: '/list/basic',
        component: BasicListPage,
      },
      {
        path: '/list/card',
        component: CardListPage,
      },
      {
        path: '/list/table/filter',
        component: FusionFilterTable,
      },
      {
        path: '/list/table/mutilcol',
        component: FusionMutilcolTable,
      },
      {
        path: '/list/table/singlecol',
        component: FusionSinglecolTable,
      },
      {
        path: '/list/table/expand',
        component: FusionExpandTable,
      },
      {
        path: '/list/table/action',
        component: FusionActionTable,
      },
      {
        path: '/list/table/mergecell',
        component: FusionMergecellTable,
      },
      {
        path: '/list/table/singletree',
        component: FusionSingletreeTable,
      },
      {
        path: '/list/table/dialog',
        component: FusionDialogTable,
      },
      {
        path: '/list/table',
        component: TableListPage,
      },
      {
        path: '/feedback/fail',
        component: FeedbackFail,
      },
      {
        path: '/feedback/success',
        component: FeedbackSuccess,
      },
      {
        path: '/feedback/403',
        component: FeedbackForbidden,
      },
      {
        path: '/feedback/404',
        component: FeedbackNotFound,
      },
      {
        path: '/feedback/500',
        component: FeedbackServerError,
      },
      {
        path: '/settings',
        component: Settings,
      },
      {
        path: '/person',
        component: Person,
      },
      {
        path: '/',
        redirect: '/dashboard/analysis',
      },
    ],
  },
];
export default routerConfig;
