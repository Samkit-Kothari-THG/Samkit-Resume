import { skillGroups } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";
import { TechList } from "../ui/TechList";

export function SkillsConstellation() {
  return (
    <section className="content-section" id="skills">
      <SectionHeading eyebrow="Skills constellation" title="Frontend, platform, AI tooling, and delivery skills grouped for scanning." />
      <div className="skill-grid">
        {skillGroups.map((group) => {
          const Icon = group.Icon;
          return (
            <article className="skill-card" key={group.label}>
              <div className="skill-title">
                <Icon size={22} aria-hidden="true" />
                <h3>{group.label}</h3>
              </div>
              <TechList items={group.skills} label={`${group.label} skills`} className="skill-cloud" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
