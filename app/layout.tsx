import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { getSiteUrl } from '@/lib/site-url';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hyperhire — 해외 개발자 원격 채용',
  description: '법률·인사 부담 없이 1주일 내 원격으로 해외 인재 채용. 마케팅·개발·CS 등 최적 인재를 빠르게 매칭합니다.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Hyperhire — 해외 개발자 원격 채용',
    description: '법률·인사 부담 없이 1주일 내 원격으로 해외 인재 채용.',
    images: [
      {
        url: `${siteUrl}/images/hyperhire_logo_footer.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hyperhire',
    title: 'Hyperhire — 해외 개발자 원격 채용',
    description: '법률·인사 부담 없이 1주일 내 원격으로 해외 인재 채용.',
    images: [`${siteUrl}/images/hyperhire_logo_footer.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hyperhire',
              email: 'aaaaaa@naver.com',
              telephone: '010-0000-0000',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '서울특별시 강남대로 479, 지하 1층 238호',
                addressCountry: 'KR',
              },
              url: siteUrl,
              logo: `${siteUrl}/images/hyperhire_logo_header.png`,
            }),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
