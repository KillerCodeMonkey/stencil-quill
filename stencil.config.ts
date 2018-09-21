import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'quill-component',
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
