import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Layers, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Expert in building end-to-end web applications with modern technologies",
  },
  {
    icon: Database,
    title: "SaaS Architecture",
    description: "Specialized in multi-tenant systems and scalable cloud solutions",
  },
  {
    icon: Layers,
    title: "CRM & ERP Systems",
    description: "Experienced in building enterprise-grade business management systems",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps with React Native",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
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
              About Me
            </span>
            <h2 className="section-heading mt-2">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>
            <p className="section-subheading mx-auto">
              A passionate developer with a proven track record of delivering 
              production-ready applications for real businesses
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a <span className="text-foreground font-medium">Full Stack Developer</span> with 
                  strong expertise in the <span className="text-primary font-medium">MERN Stack</span>, 
                  PHP, and modern web technologies. I specialize in building 
                  <span className="text-foreground font-medium"> SaaS products</span> and 
                  <span className="text-foreground font-medium"> enterprise CRM systems</span> that 
                  drive real business value.
                </p>
                <p className="leading-relaxed">
                  With hands-on experience in developing complete systems from scratch—including 
                  dashboards, role-permission systems, APIs, and mobile applications—I bring 
                  a comprehensive understanding of the entire development lifecycle.
                </p>
                <p className="leading-relaxed">
                  My work spans from converting legacy systems to modern SaaS architectures, 
                  building order management systems, to creating cross-platform mobile applications. 
                  I take pride in writing clean, maintainable code and delivering solutions 
                  that exceed expectations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { number: "2+", label: "Years Experience" },
                  { number: "5+", label: "Projects Delivered" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text font-display">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-2xl bg-card border border-border card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
