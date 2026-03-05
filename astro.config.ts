import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import playformInline from '@playform/inline'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import rehypeKatex from 'rehype-katex'
import remarkEmbeddedMedia from './src/plugins/remark-embedded-media.mjs'
import remarkReadingTime from './src/plugins/remark-reading-time.mjs'
import remarkFlexibleMarkers from 'remark-flexible-markers';
import rehypeCleanup from './src/plugins/rehype-cleanup.mjs'
import rehypeImageProcessor from './src/plugins/rehype-image-processor.mjs'
import rehypeCopyCode from './src/plugins/rehype-copy-code.mjs'
import remarkTOC from './src/plugins/remark-toc.mjs'
import { themeConfig } from './src/config'
import { imageConfig } from './src/utils/image-config'
import path from 'path'
import netlify from '@astrojs/netlify'
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  adapter: netlify(), // Set adapter for deployment, or set `linkCard` to `false` in `src/config.ts`
  site: themeConfig.site.website,
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: imageConfig
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      wrap: false
    },
    remarkPlugins: [
      remarkMath,
      remarkDirective,
      remarkEmbeddedMedia,
      remarkReadingTime,
      remarkTOC,
      () => (tree) => { console.log('remark running'); return tree; },
      remarkFlexibleMarkers],
    rehypePlugins: [
      rehypeKatex,
      rehypeCleanup,
      rehypeImageProcessor,
      rehypeCopyCode,
      [rehypeExternalLinks, { target: '_blank', rel: ['nofollow'] }]
    ]
  },
  integrations: [
    playformInline({
      Exclude: [(file) => file.toLowerCase().includes('katex')]
    }),
    mdx(),
    sitemap()
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    server: {
      allowedHosts: ['.ngrok-free.app']
    }
  },
  devToolbar: {
    enabled: false
  }
})
