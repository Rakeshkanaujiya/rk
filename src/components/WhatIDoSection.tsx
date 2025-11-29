import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Layers,
  Smartphone,
  Globe,
  Server,
  Palette,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web application development using modern technologies like React, Node.js, and PHP.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "SaaS Development",
    description:
      "Building scalable multi-tenant SaaS applications with subscription management and tenant isolation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Layers,
    title: "CRM & ERP Systems",
    description:
      "Custom enterprise solutions for customer relationship management and resource planning.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using React Native with native-like performance.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "Robust RESTful API design and implementation with proper authentication and documentation.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description:
      "Custom WordPress themes and plugins for corporate websites and e-commerce solutions.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Translating designs into pixel-perfect, responsive, and accessible user interfaces.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Improving application speed, reducing load times, and enhancing user experience.",
    color: "from-yellow-500 to-orange-500",
  },
];

export const WhatIDoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              What I Do
            </span>
            <h2 className="section-heading mt-2">
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <p className="section-subheading mx-auto">
              Comprehensive development services to bring your ideas to life
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-card rounded-2xl border border-border p-6 card-hover overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
