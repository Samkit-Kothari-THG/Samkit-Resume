import { ArrowUpRight } from "lucide-react";
import { profile, recommendationThemes, socialProof } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";
import { getPortfolioIcon } from "../ui/portfolioIcons";

export function LinkedInProofSection() {
  return (
    <section className="content-section proof-section" id="proof">
      <SectionHeading
        eyebrow="Professional snapshot"
        title="The public profile behind my engineering work."
        description="A quick view of the network, recommendations, and platform experience connected to my frontend and ecommerce work."
      />
      <div className="proof-grid">
        {socialProof.map((proof) => {
          const Icon = getPortfolioIcon(proof.icon);
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
          <span className="recommendation-eyebrow">How I work</span>
          <h3>What I bring to engineering teams and product goals.</h3>
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
