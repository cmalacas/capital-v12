
import { type PropsWithChildren } from 'react';

import Header from '@/layouts/capital/Header';
import Footer from  '@/layouts/capital/Footer';
import Footer1 from '@/layouts/capital/Footer1';
import Flashbar from '@/layouts/capital/Flashbar'
import LoginForm from '@/layouts/capital/LoginForm';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function CapitalLayout({ children }: PropsWithChildren<AuthLayoutProps>) {
    return (
            <div className="main bg-white">
                <Flashbar />
                <Header />
                
                <LoginForm />

                <div className="footer-top-spacer"></div>
                <Footer1 />
                <div className="footer-top-spacer"></div>
                <Footer />

            </div>
            
    );
}
