import { getSiteUrl } from '@/lib/site-url';
import { HomeTemplate } from '@/components/templates';

export const revalidate = 3600;

export default async function HomePage() {
  const baseUrl = getSiteUrl();

  const get = (path: string) => {
    return fetch(`${baseUrl}${path}`).then((r) => r.json());
  };

  const [candidates, categories, services, contact] = await Promise.all([
    get('/api/candidates'),
    get('/api/categories'),
    get('/api/services'),
    get('/api/contact'),
  ]);

  return <HomeTemplate candidates={candidates} categories={categories} services={services} contact={contact} />;
}
