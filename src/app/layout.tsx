import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: 'Rooyesh.online | رویش آنلاین',
    description: 'Specialized reference for learning new skills',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
            <body className=" bg-gray-50 text-gray-800">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
