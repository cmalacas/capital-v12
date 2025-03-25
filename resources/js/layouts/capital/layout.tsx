import AppLogoIcon from '@/components/app-logo-icon';
import { type PropsWithChildren } from 'react';

import Header from '@/layouts/capital/Header';
import Footer from '@/layouts/capital/Footer';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function CapitalLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
            <div>
                <Header />

                
                {children}

                <Footer />

            </div>
            
    );
}
