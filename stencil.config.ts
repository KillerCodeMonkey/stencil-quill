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
  ],
  testing: {
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80
      }
    }
  }
};
