import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'child',
  },
};

runApp(appConfig);
