import { createApp } from 'ice';

const appConfig = {
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'child',
  },
};

createApp(appConfig);