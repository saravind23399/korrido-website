import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://korrido.com';
  const pages = [
    ['/', 'weekly', 1],
    ['/apply', 'weekly', .9],
    ['/drive', 'weekly', .85],
    ['/estimate', 'weekly', .8],
    ['/pledge', 'monthly', .7],
    ['/story', 'monthly', .65],
    ['/about', 'monthly', .6],
    ['/terms', 'yearly', .3],
    ['/privacy', 'yearly', .3],
    ['/refund', 'yearly', .3],
    ['/cancellation', 'yearly', .3],
  ] as const;
  return pages.map(([path, changeFrequency, priority]) => ({ url: `${base}${path === '/' ? '' : path}`, lastModified: new Date(), changeFrequency, priority }));
}
