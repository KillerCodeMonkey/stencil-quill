import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'quill-components',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
