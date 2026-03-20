/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://multi-apps.fi',
  generateRobotsTxt: true,
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  alternateRefs: [
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://multi-apps.fi'}/fi`,
      hreflang: 'fi',
    },
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://multi-apps.fi'}/en`,
      hreflang: 'en',
    },
  ],
};
