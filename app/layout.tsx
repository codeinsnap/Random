import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { Providers } from './GlobalRedux/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gradient-to-r from-slate-500 to-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
