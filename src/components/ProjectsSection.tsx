import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectOms from "@/assets/project-oms.jpg";
import projectCrm from "@/assets/project-crm.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectWebsite from "@/assets/project-website.jpg";
import projectRealcube from "@/assets/project-realcube.jpg";

const projects = [
  {
    title: "OMS by Seerweb",
    subtitle: "SaaS Order Management System",
    description:
      "A complete SaaS-based Order Management System built from scratch. Features include real-time dashboard analytics, order tracking, inventory management, multi-user roles, and comprehensive reporting.",
    image: projectOms,
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    features: ["Multi-tenant Architecture", "Real-time Dashboard", "Role-based Access", "Reporting Module"],
    link: "https://oms.seerweb.in",
    github: null,
    type: "web",
    icon: Globe,
  },
  {
    title: "CRM Seerweb",
    subtitle: "SaaS Multi-tenant CRM",
    description:
      "Converted an existing CodeIgniter CRM into a fully-fledged SaaS multi-tenant system. Implemented subscription management, tenant isolation, and advanced CRM features.",
    image: projectCrm,
    technologies: ["CodeIgniter", "PHP", "MySQL", "jQuery", "Bootstrap"],
    features: ["Multi-tenant SaaS", "Subscription System", "Customer Management", "Lead Tracking"],
    link: "https://crm.seerweb.in",
    github: null,
    type: "web",
    icon: Database,
  },
  {
    title: "SeerwebOMS Mobile",
    subtitle: "Cross-platform Mobile App",
    description:
      "React Native mobile application for the OMS system. Enables on-the-go order management, push notifications, and seamless synchronization with the web platform.",
    image: projectMobile,
    technologies: ["React Native", "Redux", "REST APIs", "Push Notifications"],
    features: ["Cross-platform", "Offline Support", "Push Notifications", "Barcode Scanner"],
    link: null,
    github: null,
    type: "mobile",
    icon: Smartphone,
  },
  {
    title: "Seerweb.in",
    subtitle: "Corporate WordPress Website",
    description:
      "Modern corporate website built on WordPress with custom theme development. Optimized for performance, SEO, and lead generation.",
    image: projectWebsite,
    technologies: ["WordPress", "PHP", "Custom Theme", "SEO"],
    features: ["Custom Theme", "SEO Optimized", "Contact Forms", "Service Showcase"],
    link: "https://seerweb.in",
    github: null,
    type: "web",
    icon: Globe,
  },
  {
    title: "RealCube CRM",
    subtitle: "Real Estate ERP System",
    description:
      "Contributed to a comprehensive real estate CRM/ERP system during internship. Worked on frontend modules and backend improvements for property management and client tracking.",
    image: projectRealcube,
    technologies: ["React.js", "PHP", "MySQL", "Bootstrap"],
    features: ["Property Management", "Client Tracking", "Document Management", "Reporting"],
    link: null,
    github: null,
    type: "web",
    icon: Database,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
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
              Projects
            </span>
            <h2 className="section-heading mt-2">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="section-subheading mx-auto">
              Real-world projects that demonstrate my expertise in building 
              production-ready SaaS and enterprise applications
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Project Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Type Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-background/90 backdrop-blur-sm text-foreground border border-border/50">
                    {project.type === "mobile" ? "Mobile App" : "Web App"}
                  </span>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="flex gap-3">
                      {project.link && (
                        <Button variant="secondary" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-1" />
                            Visit
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button variant="secondary" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                      {!project.link && !project.github && (
                        <span className="text-primary-foreground text-sm font-medium">
                          Private Project
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="text-xs text-muted-foreground"
                      >
                        • {feature}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
