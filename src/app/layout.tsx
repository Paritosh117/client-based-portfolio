import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { InterviewProvider } from '@/context/InterviewContext';

export const metadata: Metadata = {
  title: 'Paritosh Shrouty | Senior Flutter & Full-Stack Remote Developer',
  description:
    'Senior Flutter & Full-Stack Developer with 3+ years of experience building cross-platform mobile apps, web platforms, and REST APIs for clients across US, UK, EU, UAE, and APAC timezones.',
  keywords: [
    'Hire Remote Flutter Developer',
    'Flutter Developer US UK EU UAE',
    'Senior Full-Stack Developer',
    'Mobile Developer for Startups',
    'Django REST APIs Developer',
    'Vue.js Developer',
    'Cross-Platform App Studio',
    'Paritosh Shrouty',
    'Worldwide Remote Engineer'
  ],
  authors: [{ name: 'Paritosh Shrouty' }],
  openGraph: {
    title: 'Paritosh Shrouty | Senior Flutter & Full-Stack Remote Developer',
    description:
      'Senior Flutter & Full-Stack Developer building cross-platform mobile apps, web platforms, and REST APIs for clients across US, UK, EU, UAE, and APAC timezones.',
    url: 'https://paritoshshrouty.dev',
    siteName: 'Paritosh Shrouty Global Studio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paritosh Shrouty | Senior Flutter & Full-Stack Remote Developer',
    description:
      'Senior Flutter & Full-Stack Developer building cross-platform mobile apps, web platforms, and REST APIs for clients across US, UK, EU, UAE, and APAC timezones.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        <ThemeProvider>
          <InterviewProvider>{children}</InterviewProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
