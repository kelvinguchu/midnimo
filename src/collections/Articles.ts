import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'slug',
    type: 'text',
      required: true,
      unique: true,
        label: 'Slug',
      admin: {
          position: 'sidebar',
          readOnly: true,
        description: 'Auto-generated from title, but can be customized',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            // If slug is empty, generate from title
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replaceAll(/[^a-z0-9]+/g, '-')
                .replaceAll(/(^-|-$)/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured Image',
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
      label: 'Article Body',
    },
  ],
}
