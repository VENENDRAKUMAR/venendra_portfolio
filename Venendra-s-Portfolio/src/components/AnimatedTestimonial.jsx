import { AnimatedTestimonials } from "./ui/animated-testimonials";
import rahulProfile from "../assets/RahulProfile.png"
import kuldeepProfile from "../assets/kuldeepProfile.jpeg"
import GaurangProfile from "../assets/gourangProfile.jpeg"

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Rahul Barve",
      designation: "Product Manager at TechFlow",
      src: rahulProfile,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Kuldeep Kushwah",
      designation: "Founder and CEO at techtuto",
      src: kuldeepProfile,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Gaurang Patidar",
      designation: "CEO at TheQuickAI",
      src: GaurangProfile ,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return(
    <div id="Testimonials" className="flex flex-col justify-center item-center">
    <div className="text-white font-bold flex justify-center item-center pt-20 md:text-6xl text-3xl ">Words from Happy Clients</div>
    <AnimatedTestimonials testimonials={testimonials} />
    </div>
)
}
