import { FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/Expert-Safari-Guides-Phronesis-Tour-Logistics-Best-Kenya-safari-logistics-company-based-in-Nairobi-1536x1024.webp"
import image2 from "../../assets/Ground-Transportation-Services-Phronesis-Tour-Logistics-Best-Kenya-safari-logistics-company-based-in-Nairobi-1536x1022.webp"
import image3 from "../../assets/Operations-and-Logistics-Coordinators-Phronesis-Tour-Logistics-Best-Kenya-safari-logistics-company-based-in-Nairobi-1536x1024.webp"
import image4 from "../../assets/Phronesis-Tour-Logistics-Best-Kenya-safari-logistics-company-based-in-Nairobi-2.webp";
import image5 from "../../assets/Phronesis-Tour-Logistics-Best-Kenya-safari-logistics-company-based-in-Nairobi-3.webp";
import image6 from "../../assets/Phronesis-Tour-Logistics-Best-Kenya-safari-logistics-company-based-in-Nairobi-4.webp";

const ServicesSection = () => {
  const services = [
    {
      title: "Expert Safari Guides",
      description:
        "Our knowledgeable guides are at the heart of the Phronesis experience. Each guide is highly trained in wildlife, conservation, and client safety, ensuring informative, safe, and inspiring safari experiences.",
      image: image1, // Replace with actual image URLs
      buttonLabel: "Book Now",
    },
    {
      title: "Ground Transportation Services",
      description:
        "We ensure smooth, safe, and comfortable travel across Kenya's diverse landscapes. Our fleet includes well-maintained, safari-ready vehicles that meet the highest standards for both safety and luxury.",
      image: image2,
      buttonLabel: "Book Now",
    },
    {
      title: "Operations and Logistics Coordinators",
      description:
        "Our logistics team ensures every aspect of the journey runs smoothly, from airport pickups to accommodation arrangements and special requests.",
      image: image3,
      buttonLabel: "Book Now",
    },
    {
      title: "Custom Safari Packages",
      description:
        "Tailor your safari experience to suit your interests and preferences. Our custom packages offer unique opportunities to explore Africa’s beauty your way.",
      image: image4,
      buttonLabel: "Explore Options",
    },
    {
      title: "Cultural Experiences",
      description:
        "Immerse yourself in Kenya's rich culture. Visit traditional villages, learn about indigenous tribes, and enjoy local cuisines as part of our cultural safari experiences.",
      image: image5,
      buttonLabel: "Learn More",
    },
    {
      title: "Luxury Safari Lodges",
      description:
        "Relax in world-class safari lodges offering exquisite accommodations, fine dining, and unparalleled views of Africa’s breathtaking landscapes.",
      image: image6,
      buttonLabel: "Discover Lodges",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-6">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-7">
           Discover What We Do
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-7">
          Explore our range of services tailored to provide the best safari and
          travel experiences in Kenya and beyond.
        </p>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="flex items-center justify-center gap-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
                  {service.buttonLabel}
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
