import { ManifestV3 } from 'rollup-plugin-chrome-extension'

const manifest: ManifestV3 = {
  manifest_version: 3,
  background: {
    service_worker: 'service-worker.ts',
  },
  content_scripts: [
    {
      js: ['content/index.tsx'],
      matches: ['https://*/*'],
    },
  ],
  commands: {
    'center-highlight-onnoff': {
      suggested_key: {
        default: 'Alt+H',
      },
      description: 'Center Highlight toggle',
    },
  },
}

export default manifest
