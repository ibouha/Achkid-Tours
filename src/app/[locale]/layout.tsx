import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

import {getTranslations} from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Hero'});
 
  return {
    title: "Achkid Tour - " + t('headline'),
    description: t('subtitle'),
    openGraph: {
      type: 'website',
      url: `https://achkidtours.com/${locale}`,
      title: "Achkid Tour",
      description: t('subtitle'),
      images: [
        {
          url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80',
          width: 1200,
          height: 630,
          alt: 'Achkid Tours in Agadir'
        }
      ]
    }
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
