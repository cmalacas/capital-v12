
import { type PropsWithChildren } from 'react';

import Header from '@/layouts/capital/Header';
import Footer from '@/layouts/capital/Footer';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function CapitalLayout({ children }: PropsWithChildren<AuthLayoutProps>) {
    return (
            <div className="main">
                <Header />

                
                {children}

                <Footer />

            </div>
            
    );
}
