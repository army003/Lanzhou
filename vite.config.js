import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

function pathResolve(dir) {
  return resolve(__dirname, '.', dir);
}

// sentryVitePlugin({
//   url: 'https://sentry.globerce.com/',
//   org: 'sentry',
//   project: 'non_resident_front',

//   // Specify the directory containing build artifacts
//   include: './dist',

//   // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
//   // and needs the `project:releases` and `org:read` scopes
//   authToken: 'eb7418f1f7ab422985012e78c229fe0f2dbceec29c904d84aa467ee13949e1bd',

//   // Optionally uncomment the line below to override automatic release name detection
//   // release: process.env.SENTRY_RELEASE,
//   sourceMaps: {
//     include: ['./dist/assets'],
//     ignore: ['node_modules'],
//     urlPrefix: '~/assets'
//   }
// })

const sentryConfig = {
  url: 'https://sentry.globerce.com/',
  authToken: 'eb7418f1f7ab422985012e78c229fe0f2dbceec29c904d84aa467ee13949e1bd',
  org: 'sentry',
  project: 'non_resident_front',
  release: 'non_resident_front_dev',
  deploy: {
    env: 'development'
  },
  setCommits: {
    auto: true
  },
  sourceMaps: {
    include: ['./dist/assets'],
    ignore: ['node_modules'],
    urlPrefix: '~/assets'
  }
};

// https://vitejs.dev/config/
export default defineConfig(userConfig => {
  process.env = { ...process.env, ...loadEnv(userConfig.mode, process.cwd()) };
  return {
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/'
        }
      ]
    },
    esbuild: {
      jsxFactory: 'jsx',
      jsxInject: '/** @jsx jsx */ import { jsx } from "@emotion/react"'
    },
    envPrefix: 'AC',
    sourcemap: true,
    server: {
      https: false,
      fsServe: {
        root: pathResolve('./')
      }
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
            tools: [
              '@hookform/resolvers',
              '@reduxjs/toolkit',
              'ramda',
              'react-currency-format',
              'react-error-boundary',
              'react-hook-form',
              'react-redux',
              'react-router-dom',
              'redux-persist',
              'yup'
            ],
            ui_lib: [
              '@headlessui/react',
              '@tailwindcss/aspect-ratio',
              '@tailwindcss/line-clamp',
              'framer-motion',
              'react-div-100vh',
              'react-imask',
              'react-input-mask',
              'react-otp-input',
              'react-select',
              'react-toastify',
              'swiper',
              'tailwindcss-pseudo-selectors'
            ]
          }
        }
      }
    },
    plugins: [
      //eruda(),
      react({
        babel: {
          plugins: [
            'babel-plugin-macros',
            [
              '@emotion/babel-plugin-jsx-pragmatic',
              {
                export: 'jsx',
                import: '__cssprop',
                module: '@emotion/react'
              }
            ],
            ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro']
          ]
        }
      })
      // viteSentry(sentryConfig)
    ]
  };
});
