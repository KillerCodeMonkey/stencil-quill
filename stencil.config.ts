import { Config } from '@stencil/core';

export const config: Config = {
  bundles: [{
    components: ['quill-editor', 'quill-view-html']
  }],
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
