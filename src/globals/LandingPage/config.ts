import type { GlobalConfig } from 'payload'

export const LandingPage: GlobalConfig = {
  slug: 'landing-page',
  label: 'Landing Page Content',
  access: {
    read: () => true,
  },
  fields: [
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Main Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Subtitle',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'primaryButton',
          type: 'group',
          label: 'Primary Button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
            },
          ],
        },
        {
          name: 'secondaryButton',
          type: 'group',
          label: 'Secondary Button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
            },
          ],
        },
        {
          name: 'heroImage',
          type: 'upload',
          label: 'Hero Image',
          relationTo: 'media',
        },
      ],
    },

    // Stats Section
    {
      name: 'stats',
      type: 'group',
      label: 'Statistics Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Statistics',
          maxRows: 4,
          fields: [
            {
              name: 'number',
              type: 'text',
              label: 'Number',
              required: true,
            },
            {
              name: 'suffix',
              type: 'text',
              label: 'Suffix (%, +, etc.)',
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              label: 'Description',
            },
          ],
        },
      ],
    },

    // Features Section
    {
      name: 'features',
      type: 'group',
      label: 'Features Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Features',
          maxRows: 6,
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Feature Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Feature Description',
            },
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              options: [
                { label: 'Chart', value: 'chart' },
                { label: 'Shield', value: 'shield' },
                { label: 'Clock', value: 'clock' },
                { label: 'Users', value: 'users' },
                { label: 'Settings', value: 'settings' },
                { label: 'Smartphone', value: 'smartphone' },
              ],
            },
            {
              name: 'percentage',
              type: 'number',
              label: 'Progress Percentage',
              min: 0,
              max: 100,
            },
          ],
        },
      ],
    },

    // Posts Section
    {
      name: 'postsSection',
      type: 'group',
      label: 'Posts/Articles Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
        },
        {
          name: 'showLatestPosts',
          type: 'checkbox',
          label: 'Show Latest Posts Automatically',
          defaultValue: true,
        },
        {
          name: 'postsLimit',
          type: 'number',
          label: 'Number of Posts to Show',
          defaultValue: 6,
          min: 1,
          max: 12,
        },
      ],
    },

    // Call to Action Section
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'CTA Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'CTA Description',
        },
        {
          name: 'button',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
            },
          ],
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          label: 'Background Image',
          relationTo: 'media',
        },
      ],
    },
  ],
}
