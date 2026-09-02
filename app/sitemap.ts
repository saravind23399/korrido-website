import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://korrido.com';
  const pages = [
    ['/', 'weekly', 1],
    ['/how-it-works', 'weekly', .9],
    ['/estimate', 'weekly', .85],
    ['/apply', 'weekly', .8],
    ['/drive', 'weekly', .75],
    ['/about', 'monthly', .7],
    ['/terms', 'yearly', .3],
    ['/privacy', 'yearly', .3],
    ['/refund', 'yearly', .3],
    ['/cancellation', 'yearly', .3],
  ] as const;
  return pages.map(([path, changeFrequency, priority]) => ({ url: `${base}${path === '/' ? '' : path}`, lastModified: new Date(), changeFrequency, priority }));
}
