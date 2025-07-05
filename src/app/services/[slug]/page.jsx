// import ServiceDetails from "@/components/ServiceDetails";

import { services } from "../../../../utilities/services";
import ServiceDetails from "../../components/ServiceDetails";


export default function ServicePage({ params }) {
  const { slug } = params;
  console.log(slug,params);
  
  const service = services.find((s) => s.slug === slug);


  if (!service) return <div>Service Not Found</div>;

  return <ServiceDetails service={service} />;
}


// export default function Dettextails(params) {
//   return (<Details/>);
// }
