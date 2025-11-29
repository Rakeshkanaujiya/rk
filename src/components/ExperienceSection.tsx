import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Seerweb ERP Solutions",
    role: "Full Stack Developer",
    period: "2024 - 2025",
    location: "India",
    description: "Led development of multiple SaaS products and enterprise systems.",
    achievements: [
      "Independently converted company CRM (crm.seerweb.in) built on CodeIgniter into a full SaaS-based multi-tenant system",
      "Developed complete SaaS-based OMS (oms.seerweb.in) using React.js and Node.js from scratch",
      "Built SeerwebOMS mobile application using React Native for cross-platform deployment",
      "Implemented dashboards, charts, role-permission systems, user modules, and reporting modules",
      "Developed the company WordPress website (seerweb.in)",
    ],
    technologies: ["React.js", "Node.js", "CodeIgniter", "React Native", "WordPress", "MySQL"],
    link: "https://seerweb.in",
  },
  {
    company: "Exalogic Consulting",
    role: "Software Developer Intern",
    period: "2022",
    location: "India",
    description: "Contributed to a live real estate CRM/ERP project.",
    achievements: [
      "Worked on RealCube - a comprehensive real estate CRM/ERP system",
      "Developed and improved front-end modules for better user experience",
      "Contributed to backend improvements and feature implementations",
      "Collaborated with senior developers on production-level code",
    ],
    technologies: ["React.js", "PHP", "MySQL", "Bootstrap"],
    link: null,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted/30 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Experience
            </span>
            <h2 className="section-heading mt-2">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subheading mx-auto">
              From internship to independently building complete SaaS products
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative pl-16 md:pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-4 md:left-6 top-0 w-4 h-4 rounded-full bg-primary shadow-glow"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  />

                  {/* Content Card */}
                  <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-hover">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                          {exp.company}
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 md:mt-0 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + i * 0.05 + 0.4 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
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
      </div>
    </section>
  );
};
