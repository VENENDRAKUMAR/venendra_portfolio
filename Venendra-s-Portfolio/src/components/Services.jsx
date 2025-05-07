import { CardSpotlight } from "./ui/card-spotlight";

const servicesData = [
    {
      id: 7,
      title: "Web Development",
      description: "Building modern, high-performance websites tailored to your needs to ensure an engaging user experience.",
      features: [
        "Custom Website Design",
        "Responsive & Mobile-Friendly",
        "SEO & Performance Optimization",
        "E-Commerce & Web Applications"
      ]
    },
    {
      id: 8,
      title: "eCommerce Development",
      description: "Our experts can create a modern, intuitive, and eco-friendly store to exhibit your products and services to people worldwide.",
      features: [
        "Custom eCommerce Solutions",
        "Secure Payment Gateway Integration",
        "User-Friendly Shopping Experience",
        "Multi-Vendor Marketplace Support"
      ]
    },
    {
      id: 9,
      title: "Digital Marketing Services",
      description: "We assist in enhancing brand authority and exposure. You are only one tap away from reaching your intended audience.",
      features: [
        "SEO & Content Marketing",
        "Social Media Management",
        "PPC & Google Ads Campaigns",
        "Email & Influencer Marketing"
      ]
    },
    {
      id: 10,
      title: "UI/UX Designing",
      description: "Our experts create extraordinary UI/UX design ideas consistent with the latest trends and technologies.",
      features: [
        "User-Centered Design Approach",
        "Wireframing & Prototyping",
        "Interactive & Engaging Interfaces",
        "Mobile & Web App Designs"
      ]
    },
    {
      id: 11,
      title: "Portfolio & Landing Page Development",
      description: "Creating visually appealing, user-friendly web pages that showcase an individual's or business's skills, products, or services.",
      features: [
        "Personal & Business Portfolios",
        "SEO-Friendly Landing Pages",
        "Lead Generation Optimization",
        "Fast & Lightweight Performance"
      ]
    }
  ];
  

export function Services() {
  return (
    <>
    <div id="Services" className="text-white md:py-20 py-10 text-3xl md:text-6xl font-bold flex justify-center">My Services</div>
    <div className="grid grid-cols-1 sm:grid-cols-3   w-full max-w-7xl md:mx-auto gap-4">
    {servicesData.map((services)=>(     
    <CardSpotlight key={services.id} className="h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        {services.title}
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
      features we provide :
        <ul className="list-none  mt-2">
        {services.features.map((feature,index)=>(
            <Step key={index} title={feature} />
        ))
            
        }
          
          
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        {services.description}
      </p>
    </CardSpotlight>
    ))}
    </div>
    </>
  );
}

const Step = ({
  title
}) => {
  return (
    (<li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>)
  );
};

const CheckIcon = () => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0" />
    </svg>)
  );
};
