import { defineConfig } from 'cypress'
import viteConfig from './vite.config'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
  component: {
    supportFile: false,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        ...viteConfig,
        // ... other overrides ...
      },
    },
  },
})