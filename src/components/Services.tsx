import React from "react";
import Section from "./Section";
import { IconCode, IconBroadcast, IconSaaS } from "./Icons";
import { Service } from "@/types";

const services: Service[] = [
  {
    title: "Fullstack Web App Development",
    description:
      "Fast, affordable, and high-quality solutions. I build complete web applications from front-end to back-end, ensuring a seamless and robust final product.",
    icon: <IconCode />,
  },
  {
    title: "Broadcast Messaging (API & Service)",
    description:
      "Reliable API services for sending broadcast messages. Perfect for notifications, marketing campaigns, and mass communication needs.",
    icon: <IconBroadcast />,
  },
  {
    title: "SaaS Application Sales",
    description:
      "Ready-to-use Software as a Service applications. Get access to powerful tools without the overhead of building them from scratch.",
    icon: <IconSaaS />,
  },
];

// Fix: Created a dedicated interface for ServiceCard props to resolve type errors with the 'key' prop.
interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-navy p-6 rounded-md shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
      {service.icon}
      <h3 className="text-xl font-bold text-lightest-slate mb-3">
        {service.title}
      </h3>
      <p className="text-light-slate">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <Section id="services">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center whitespace-nowrap text-accent font-mono">
        Services
        <span className="block w-full h-px bg-light-navy ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
