import { Download } from "lucide-react";
import { profile } from "../../data/resume";

export function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="brand-mark" aria-label="Samkit Kothari portfolio home">
        <span>SK</span>
      </a>
      <nav aria-label="Portfolio sections">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </nav>
      <a className="icon-link" href={profile.resume} target="_blank" rel="noreferrer" aria-label="Download resume">
        <Download size={18} />
      </a>
    </header>
  );
}
