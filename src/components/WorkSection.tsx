import { Link } from "react-router-dom";
import iconViewMuted from "../assets/icon-view-muted.svg";
import iconView from "../assets/icon-view.svg";
import { projects } from "../data/projects";
import Chip from "./Chip";
import PillButton from "./PillButton";

export default function WorkSection() {
  const visibleProjects = projects.filter((project) => !project.hidden);

  return (
    <section id="work" className="flex w-full flex-col items-start py-16 lg:py-28">
      <div className="flex w-full items-center justify-center px-5 lg:px-30">
        <p className="w-full font-display text-xl font-bold leading-[28px] text-ink">/ Work</p>
      </div>

      {visibleProjects.map((project, i) => {
        const chipLabels = Array.isArray(project.chipLabel) ? project.chipLabel : [project.chipLabel];

        // The project image (or its placeholder) doubles as a link to the case
        // study, with a 20% tint fading in on hover. Coming-soon entries keep
        // the same box but aren't clickable and get no hover tint.
        const mediaClasses =
          "group relative block h-[240px] w-full shrink-0 overflow-hidden rounded-2xl lg:h-[400px] lg:w-[600px]";
        const media = (
          <>
            {project.image ? (
              <img src={project.image} alt="" className="h-full w-full object-cover" />
            ) : (
              // TODO: swap for the real project image
              <div className="h-full w-full bg-placeholder" />
            )}
            {!project.comingSoon && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            )}
          </>
        );

        return (
          <div
            key={project.id}
            className={`flex w-full flex-col gap-10 px-5 py-10 lg:items-center lg:px-30 lg:py-[60px] ${
              i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="flex flex-1 flex-col items-start gap-6">
              <p className="font-body text-lg leading-[28px] text-ink">{project.role}</p>
              <h3 className="font-display text-xl font-bold leading-[28px] text-ink">{project.title}</h3>
              <div className="flex flex-wrap items-start gap-3">
                {chipLabels.map((label) => (
                  <Chip key={label} company={project.chipCompany} label={label} />
                ))}
              </div>
              <p className="font-body text-base leading-6 text-ink">{project.description}</p>

              {project.comingSoon ? (
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center gap-3 whitespace-nowrap rounded-full bg-[#e1e1d7] px-5 py-3 text-base font-semibold text-[#8e8e88]"
                >
                  <span>View project</span>
                  <img src={iconViewMuted} alt="" className="h-[18px] w-4" aria-hidden="true" />
                </span>
              ) : (
                <PillButton
                  href={`/work/${project.id}`}
                  variant="accent"
                  icon={iconView}
                  iconPosition="right"
                  iconClassName="h-[18px] w-4"
                >
                  View project
                </PillButton>
              )}
            </div>

            {project.comingSoon ? (
              <div className={mediaClasses}>{media}</div>
            ) : (
              <Link
                to={`/work/${project.id}`}
                aria-label={`View project: ${project.title}`}
                className={mediaClasses}
              >
                {media}
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
}
