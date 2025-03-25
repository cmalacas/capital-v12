import FooterLogos from '@/layouts/capital/Footer-logos';
import FooterMenu from '@/layouts/capital/Footer-menu';
import Copyright from '@/layouts/capital/Copyright';

export default function Footer() {
    return (
            <div className="footer">
                <FooterLogos />
                <FooterMenu />
                <Copyright />
            </div>
            
    );
}
