import { withSentryConfig } from '@sentry/nextjs'
import * as tsImport from 'ts-import'

const loadTS = async (filePath) => tsImport.load(filePath)

const { DefaultChain: defaultChain } = await loadTS('./utils/chains.ts')

const sentryWebpackPluginOptions = {
  org: process.env.SENTRY_ORG,
  project: 'javascript-nextjs',
  silent: true,
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  sentry: {
    hideSourceMaps: false,
  },
  experimental: {
    transpilePackages: ['@reservoir0x/reservoir-kit-ui'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: `/${defaultChain.routePrefix}`,
        permanent: false,
      },
      {
        source: '/collection/:chain/:collection',
        destination: '/:chain/collection/:collection',
        permanent: true,
      },
      {
        source: '/collection/:chain/:collection/:tokenId',
        destination: '/:chain/asset/:collection%3A:tokenId',
        permanent: true,
      },
      {
        source: '/collection-rankings',
        destination: `/${defaultChain.routePrefix}/collection-rankings`,
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://marketplace-v2-gh982kt3j-fixonzs-projects.vercel.app",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // This value is generally more widely supported
          },
        ],
      },
    ]
  },
}

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions)
