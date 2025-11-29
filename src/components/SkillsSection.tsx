import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 90 },
      { name: "jQuery", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 90 },
      { name: "PHP", level: 90 },
      { name: "CodeIgniter", level: 95 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    title: "Mobile & Others",
    skills: [
      { name: "React Native", level: 85 },
      { name: "WordPress", level: 90 },
      { name: "Git", level: 80 },
      { name: "Docker", level: 70 },
    ],
  },
];

const techStack = [
  "React", "Node.js", "MongoDB", "Express", "PHP", "MySQL",
  "TypeScript", "Tailwind", "Bootstrap", "WordPress", "React Native",
  "CodeIgniter", "Git", "Docker", "Redux", "REST APIs"
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
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
              Skills & Technologies
            </span>
            <h2 className="section-heading mt-2">
              My Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="section-subheading mx-auto">
              A comprehensive toolkit built through real-world project experience
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-card rounded-2xl border border-border p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-6">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-center font-display text-lg font-semibold text-foreground mb-8">
              Technologies I Work With
            </h3>
            <div className="relative overflow-hidden py-4">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

              {/* Marquee */}
              <div className="flex gap-6 animate-marquee">
                {[...techStack, ...techStack].map((tech, index) => (
                  <motion.div
                    key={`${tech}-${index}`}
                    className="flex-shrink-0 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium whitespace-nowrap"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
