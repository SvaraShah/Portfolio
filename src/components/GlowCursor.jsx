import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const GlowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mousePosition.x, springConfig);
  const y = useSpring(mousePosition.y, springConfig);

  // Disable on mobile/touch devices
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) return null;

  return (
    <motion.div
      className="cursor-glow"
      style={{
        left: x,
        top: y,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  );
};
