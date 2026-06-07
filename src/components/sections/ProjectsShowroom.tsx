import type { CSSProperties } from "react";
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
  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === activeProjectId)
  );
  const selectProjectAtOffset = (offset: number) => {
    const nextIndex = (activeIndex + offset + projects.length) % projects.length;
    onSelectProject(projects[nextIndex].id);
  };

  return (
    <section className="content-section project-band" id="projects">
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
