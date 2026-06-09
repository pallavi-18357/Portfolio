import { motion } from "motion/react";
import { education, additionalInfo } from "../constants";

const Education = () => {
  return (
    <section className="c-space section-spacing" id="education">
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/10 to-transparent rounded-3xl -z-10 blur-2xl" />
        
        <div className="space-y-3 mb-8">
          <h2 className="text-heading bg-clip-text text-transparent bg-gradient-to-r from-white to-forest-light">
            Education
          </h2>
          <div className="bg-gradient-to-r from-transparent via-forest/40 to-transparent h-[1px] w-full" />
        </div>

        <div className="mt-10 space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 border rounded-2xl border-forest/20 bg-gradient-to-r from-storm/40 to-indigo/30 hover:-translate-y-1 hover:border-forest/50 hover:shadow-lg hover:shadow-forest/20 duration-300 transition-all"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-forest-light transition-colors">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {item.institution}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1 sm:items-end shrink-0">
                  <span className="text-sm font-medium text-forest-light bg-forest/10 px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                  <span className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors font-semibold">
                    {item.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="mt-20 text-heading bg-clip-text text-transparent bg-gradient-to-r from-white to-forest-light">
          Additional Information
        </h2>
        <div className="bg-gradient-to-r from-transparent via-forest/40 to-transparent mt-4 h-[1px] w-full" />

        <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2">
          <InfoCard title="Certifications" items={additionalInfo.certifications} delay={0} />
          <InfoCard title="Hackathons" items={additionalInfo.hackathons} delay={0.1} />
          <InfoCard title="Achievements" items={additionalInfo.achievements} delay={0.2} />
          <InfoCard title="Activities" items={additionalInfo.activities} delay={0.3} />
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group p-5 border rounded-2xl border-forest/20 bg-gradient-to-b from-storm/50 to-indigo/40 hover:border-forest/50 hover:shadow-lg hover:shadow-forest/20 hover:-translate-y-1 transition-all duration-300"
  >
    <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase text-forest-light group-hover:text-forest transition-colors">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: delay + index * 0.05 }}
          viewport={{ once: true }}
          className="flex gap-2 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors"
        >
          <span className="text-forest-light shrink-0 text-lg">▸</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Education;
