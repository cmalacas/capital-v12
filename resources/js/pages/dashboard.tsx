import AppLayout from '@/layouts/capital/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/',
    },
];
export default function Dashobard() {

  return (
  
    <AppLayout breadcrumbs={breadcrumbs}>
      xxxxx
    </AppLayout>

  );

}