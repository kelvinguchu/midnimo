// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import path from 'node:path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Articles } from './collections/Articles'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL:
    process.env.NODE_ENV === 'production' ? 'https://midnimocollege.so' : 'http://localhost:3000',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Midnimo College',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/logo.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: './components/admin/Logo.tsx',
        Icon: './components/admin/Icon.tsx',
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Articles],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
  ],
})
