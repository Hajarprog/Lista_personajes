import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',

});

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
} 