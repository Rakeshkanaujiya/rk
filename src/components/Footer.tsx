import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import rk_logo from "@/assets/Rk_logo.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <img src={rk_logo} alt="RK Logo" className="h-12 w-auto rounded-md" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Rakesh Kanaujiya. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-card border border-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
