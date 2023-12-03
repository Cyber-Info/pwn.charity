import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://pwn.charity',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://pwn.charity/events',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        }
    ];
}
