
import { type PropsWithChildren } from 'react';

import Header from '@/layouts/capital/Header';
import Footer from  '@/layouts/capital/Footer';
import Footer1 from '@/layouts/capital/Footer1';
import Flashbar from '@/layouts/capital/Flashbar'
interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function CapitalLayout({ children }: PropsWithChildren<AuthLayoutProps>) {
    return (
            <div className="main">
                <Flashbar />
                <Header />
                
                {children}

                <Footer1 />
                <Footer />

            </div>
            
    );
}
