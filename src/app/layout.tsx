import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Optimize font loading with specific weights and preload
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  // Specify only the weights you'll use to reduce bundle size
  weight: ['400', '500', '600', '700'],
  // Adjust fallback fonts for better font matching
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI'],
});

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto',
// });

// Optimize metadata for SEO
export const metadata: Metadata = {
  title: "Hospital Name | Healthcare Services",
  description: "Professional healthcare services providing quality medical care",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#D3D3D3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
