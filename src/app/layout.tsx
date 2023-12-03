import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains_mono'
});

export const metadata: Metadata = {
    metadataBase: new URL('https://pwn.charity'),
    bookmarks: ['https://pwn.charity'],
    category: 'technology',
    alternates: {
        canonical: '/'
    },
    title: 'pwn.charity | Popping shells and ringing bells.',
    description:
        'pwn.charity is a CTF team that focuses on education and community. We are a group of students and professionals who are passionate about cybersecurity.',
    applicationName: 'pwn.charity',
    referrer: 'origin-when-cross-origin',
    keywords: ['cybersecurity', 'ctf', 'ctf team', 'cyber info'],
    other: {
        'apple-mobile-web-app-title': 'pwn.charity',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'theme-color': '#9d6fc1'
    }
    // openGraph: {
    //     type: 'website',
    //     locale: 'en_US',
    //     url: 'https://pwn.charity',
    //     title: 'Cyber Info | Empowering your cybersecurity education',
    //     description:
    //         'At Cyber Info, we strive to empower every individual with easy access to cybersecurity education because your future matters.',
    //     siteName: 'pwn.charity',
    //     images: [
    //         {
    //             url: '/og-image.png',
    //             width: 600,
    //             height: 315,
    //             alt: 'pwn.charity'
    //         }
    //     ]
    // }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    jetBrainsMono.className,
                    'h-full scroll-smooth bg-[#000b00] antialiased'
                )}
            >
                {children}
            </body>
        </html>
    );
}
