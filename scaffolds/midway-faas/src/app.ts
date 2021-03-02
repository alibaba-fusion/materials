import { runApp, IAppConfig, request } from 'ice';
import { defaults } from '@midwayjs/hooks/request';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
  },
};

defaults.request = request;

runApp(appConfig);
