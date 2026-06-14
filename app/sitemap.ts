import { MetadataRoute } from 'next';

const siteUrl = 'https://shivanshuyadav.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
