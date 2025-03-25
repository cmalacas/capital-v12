import CapitalLayoutTemplate from '@/layouts/capital/layout';

export default function CapitalLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <CapitalLayoutTemplate title={title} description={description} {...props}>
            {children}
        </CapitalLayoutTemplate>
    );
}
