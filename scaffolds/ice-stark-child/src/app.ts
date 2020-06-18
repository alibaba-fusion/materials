import { createApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'child',
  },
};

createApp(appConfig);