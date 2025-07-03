// app/services/[slug]/page.jsx (or pages/services/[slug].jsx)

import { services } from '@/utils/services'; // ENT, Cardiology, etc.
import ServiceDetails from '@/components/ServiceDetails';

export default function ServicePage({ params }) {
  const { slug } = params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return <div>Service Not Found</div>;

  return <ServiceDetails service={service} onBack={() => history.back()} />;
}
