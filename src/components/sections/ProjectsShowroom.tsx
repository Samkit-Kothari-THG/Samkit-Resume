import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import { SectionHeading } from "../ui/SectionHeading";
import { TechList } from "../ui/TechList";

type ProjectsShowroomProps = {
  activeProjectId: ProjectId;
  onSelectProject: (projectId: ProjectId) => void;
};

type AccentStyle = CSSProperties & {
  "--accent": string;
};

export function ProjectsShowroom({ activeProjectId, onSelectProject }: ProjectsShowroomProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === activeProjectId)
  );

  const selectProjectAtOffset = useCallback((offset: number) => {
    const nextIndex = (activeIndex + offset + projects.length) % projects.length;
    onSelectProject(projects[nextIndex].id);
  }, [activeIndex, onSelectProject]);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setIsKeyboardActive(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsKeyboardActive(entry.isIntersecting);
    }, { threshold: 0.32 });

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isKeyboardActive) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      const isEditableTarget =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

      if (isEditableTarget) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        selectProjectAtOffset(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        selectProjectAtOffset(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isKeyboardActive, selectProjectAtOffset]);

  return (
    <section ref={sectionRef} className="content-section project-band" id="projects">
      <SectionHeading
        eyebrow="Project showroom"
        title="Clickable pods with problem, solution, technology, and impact."
        description="Each project card is connected to a 3D pod in the command center, keeping the visual system tied to resume substance."
      />
      <div className="project-controls" aria-label="Project focus controls">
        <button type="button" onClick={() => selectProjectAtOffset(-1)}>
          <ArrowLeft size={17} aria-hidden="true" />
          Previous
        </button>
        <span>
          Focused pod {activeIndex + 1} of {projects.length}
        </span>
        <button type="button" onClick={() => selectProjectAtOffset(1)}>
          Next
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>
      <div className="project-grid">
        {projects.map((project) => {
          const Icon = project.Icon;
          const isActive = activeProjectId === project.id;
          const accentStyle: AccentStyle = { "--accent": project.accent };

          return (
            <button
              className={isActive ? "project-card active" : "project-card"}
              key={project.id}
              type="button"
              onClick={() => onSelectProject(project.id)}
              style={accentStyle}
            >
              <span className="project-topline">
                <Icon size={22} aria-hidden="true" />
                {isActive ? "Selected pod" : "Open pod"}
              </span>
              <h3>{project.title}</h3>
              <p>{project.short}</p>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Solution</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div>
                  <dt>Impact</dt>
                  <dd>{project.impact}</dd>
                </div>
              </dl>
              <TechList items={project.tech} label={`${project.title} technologies`} />
            </button>
          );
        })}
      </div>
    </section>
  );
}
