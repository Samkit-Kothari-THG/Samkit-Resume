import { ArrowUpRight } from "lucide-react";
import { profile, recommendationThemes, socialProof } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function LinkedInProofSection() {
  return (
    <section className="content-section proof-section" id="proof">
      <SectionHeading
        eyebrow="LinkedIn proof"
        title="Public credibility that supports the portfolio story."
        description="These signals make the 3D experience feel grounded in a real professional profile, not just a visual demo."
      />
      <div className="proof-grid">
        {socialProof.map((proof) => {
          const Icon = proof.Icon;
          return (
            <article className="proof-card" key={proof.label}>
              <Icon size={20} aria-hidden="true" />
              <strong>{proof.value}</strong>
              <span>{proof.label}</span>
              <p>{proof.detail}</p>
            </article>
          );
        })}
      </div>
      <div className="recommendation-panel">
        <div>
          <span className="recommendation-eyebrow">Recommendation themes</span>
          <h3>What the site should make obvious within the first minute.</h3>
        </div>
        <div className="recommendation-grid">
          {recommendationThemes.map((theme) => (
            <article key={theme.title}>
              <h4>{theme.title}</h4>
              <p>{theme.body}</p>
            </article>
          ))}
        </div>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          Open LinkedIn
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
