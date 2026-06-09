import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/10 to-transparent rounded-3xl -z-10 blur-2xl" />
        
        <div className="space-y-3 mb-8">
          <h2 className="text-heading bg-clip-text text-transparent bg-gradient-to-r from-white to-forest-light">
            Projects
          </h2>
          <div className="bg-gradient-to-r from-transparent via-forest/40 to-transparent h-[1px] w-full" />
          <p className="mt-3 subtext max-w-2xl leading-relaxed">
            Selected work spanning distributed systems, AI pipelines, and full-stack
            applications — built with scalable, fault-tolerant design principles.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {myProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Project {...project} setPreview={setPreview} />
            </motion.div>
          ))}
        </div>
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80 border border-forest/30"
          src={preview}
          style={{ x: springX, y: springY }}
          alt="Project preview"
        />
      )}
    </section>
  );
};

export default Projects;
