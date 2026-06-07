import { Download } from "lucide-react";
import { profile } from "../../data/resume";
import type { ThemeMode } from "../../types/theme";
import { ThemeToggle } from "../ui/ThemeToggle";

type HeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
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
      <div className="header-actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a className="icon-link" href={profile.resume} target="_blank" rel="noreferrer" aria-label="Download resume">
          <Download size={18} />
        </a>
      </div>
    </header>
  );
}
