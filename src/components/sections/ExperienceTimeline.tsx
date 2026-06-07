import { motion } from "framer-motion";
import { experiences } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceTimeline() {
  return (
    <section className="content-section" id="experience">
      <SectionHeading
        eyebrow="Experience timeline"
        title="Frontend systems built for real commerce pressure."
        description="Two engineering chapters tied together by reusable UI systems, platform thinking, performance ownership, and product delivery."
      />
      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            className="timeline-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.12, duration: 0.48 }}
          >
            <div className="timeline-pin">{index + 1}</div>
            <div>
              <p className="period">{experience.period}</p>
              <h3>{experience.role}</h3>
              <strong>{experience.company}</strong>
              <p>{experience.summary}</p>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
