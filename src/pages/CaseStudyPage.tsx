import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import iconArrowRight from "../assets/icon-arrow-right.svg";
import iconImagePlaceholder from "../assets/icon-image-placeholder.svg";
import Chip from "../components/Chip";
import { projects } from "../data/projects";

/** The gray "artwork goes here" block used when a section has no real image yet. */
function ImagePlaceholder({
  caption,
  className = "",
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-case-border p-6 ${className}`}
    >
      <img src={iconImagePlaceholder} alt="" className="h-8 w-8" aria-hidden="true" />
      <p className="max-w-xs text-center font-body text-[13px] text-case-muted">{caption}</p>
    </div>
  );
}

/** A real screenshot when `src` is set; otherwise falls back to the gray placeholder box. */
function CaseImage({
  src,
  alt,
  caption,
  className = "",
}: {
  src?: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  if (!src) return <ImagePlaceholder caption={caption} className={className} />;
  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function BodyParagraphs({ body, className = "" }: { body: string | string[]; className?: string }) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <div className={`flex w-full flex-col items-start gap-3 ${className}`}>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className="w-full font-body text-sm leading-[22px] text-case-muted">
          {p}
        </p>
      ))}
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="w-full font-display text-[28px] font-bold text-case-ink lg:text-[36px]">{children}</h2>;
}

/**
 * Case-study page — mirrors Figma's "case-study-template" (node 46:1182:
 * no "Setting the scene" section, and an expanded "How I approached it"
 * with an alternating text/image deliverable showcase below the 3-step
 * methodology summary), populated per project from `project.caseStudy`.
 * Reachable at /work/:id via the "View project" buttons on the home page's
 * Work section. Real screenshots (via the `*ImageSrc` fields) render
 * directly; otherwise each image slot falls back to a placeholder box.
 */
export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.id === slug);
  const project = projects[index];

  useEffect(() => {
    if (project) document.title = `${project.title} — Jack`;
    return () => {
      document.title = "Jack — UX Designer & Strategist";
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/#work" replace />;
  }

  const cs = project.caseStudy;

  return (
    <article className="w-full">
      {/* Hero */}
      <section className="flex flex-col gap-10 px-5 pt-12 pb-16 lg:flex-row lg:items-center lg:gap-20 lg:px-30 lg:pt-20 lg:pb-25">
        <div className="flex flex-1 flex-col items-start gap-6">
          <h1 className="w-full font-display text-[36px] font-bold leading-[44px] tracking-[-0.5px] text-case-ink lg:text-[56px] lg:leading-[64px] lg:tracking-[-1.12px]">
            {project.title}
          </h1>

          <p className="w-full font-body text-lg leading-[28px] text-case-muted">{project.description}</p>

          <div className="flex flex-wrap items-start gap-4">
            {cs.tags.map((tag) => (
              <Chip key={tag} company={project.chipCompany} label={tag} />
            ))}
          </div>

          <hr className="w-full border-t border-case-border" />

          <div className="grid w-full grid-cols-2 gap-6 lg:flex lg:items-start">
            <div className="flex flex-1 flex-col items-start gap-1.5">
              <p className="font-display text-[11px] font-bold uppercase tracking-[1px] text-case-muted">Client</p>
              <p className="font-body text-sm font-medium text-case-ink">{cs.client}</p>
            </div>
            <div className="flex flex-1 flex-col items-start gap-1.5">
              <p className="font-display text-[11px] font-bold uppercase tracking-[1px] text-case-muted">
                Timeline
              </p>
              <p className="font-body text-sm font-medium text-case-ink">{cs.timeline}</p>
            </div>
            <div className="col-span-2 flex flex-1 flex-col items-start gap-1.5 lg:col-span-1">
              <p className="font-display text-[11px] font-bold uppercase tracking-[1px] text-case-muted">
                My Role
              </p>
              <p className="font-body text-sm font-medium text-case-ink">{cs.myRole}</p>
            </div>
          </div>
        </div>

        <div className="w-full flex-1">
          <CaseImage
            src={cs.heroImageSrc}
            alt={cs.heroImageCaption}
            caption={cs.heroImageCaption}
            className="h-[280px] lg:h-[480px]"
          />
        </div>
      </section>

      {/* Problem */}
      <section className="flex w-full flex-col gap-8 border-y border-case-border px-5 py-16 lg:gap-12 lg:px-30 lg:py-25">
        <SectionHeading>Defining the challenge</SectionHeading>
        <div className="flex w-full flex-col items-start gap-8">
          <p className="w-full font-body text-base leading-[26px] text-case-ink">{cs.problemIntro}</p>

          <div className="w-full rounded-tl rounded-tr-xl rounded-bl rounded-br-xl bg-white p-6 lg:p-8">
            <div className="flex flex-col items-start gap-3">
              <p className="font-display text-[11px] font-bold uppercase tracking-[1px] text-case-muted">
                The How Might We
              </p>
              <p className="font-display text-xl font-bold leading-[30px] text-case-ink lg:text-[22px]">
                {cs.howMightWe}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-5">
            {cs.painPoints.map((point, i) => (
              <div key={point.title} className="flex w-full items-start gap-4">
                <p className="font-display text-base font-bold text-case-ink">{String(i + 1).padStart(2, "0")}</p>
                <div className="flex flex-1 flex-col items-start gap-1">
                  <p className="w-full font-body text-base font-bold text-case-ink">{point.title}</p>
                  <p className="w-full font-body text-sm leading-[22px] text-case-muted">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="flex w-full flex-col gap-10 border-b border-case-border px-5 py-16 lg:gap-14 lg:px-30 lg:py-25">
        <SectionHeading>How I approached it</SectionHeading>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {cs.processSteps.map((step, i) => (
            <div key={step.title} className="flex flex-1 flex-col items-start gap-4">
              <p className="font-display text-[40px] font-bold text-case-ink lg:text-[48px]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="flex flex-col items-start gap-2">
                <p className="w-full font-display text-lg font-bold text-case-ink">{step.title}</p>
                <p className="w-full font-body text-sm leading-[22px] text-case-muted">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-start gap-6">
          <CaseImage
            src={cs.processImageSrc}
            alt={cs.processImageCaption}
            caption={cs.processImageCaption}
            className={cs.processImageSrc ? "aspect-[4096/2257] w-full" : "h-[260px] lg:h-[400px]"}
          />
          {/* With a real image the same copy runs as a caption paragraph beneath it instead of inside the placeholder box */}
          {cs.processImageSrc && (
            <p className="w-full font-body text-base leading-[26px] text-case-ink">{cs.processImageCaption}</p>
          )}
        </div>

        {cs.processClosing && (
          <p className="w-full font-body text-base leading-[26px] text-case-ink">{cs.processClosing}</p>
        )}

        {/* Expanded deliverable showcase — alternating text/image rows */}
        <div className="flex w-full flex-col gap-10 lg:gap-14">
          {cs.processShowcase.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-start gap-6 lg:items-center lg:gap-10 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="flex w-full flex-col items-start gap-2 lg:flex-1">
                {item.eyebrow && (
                  <p className="w-full font-body text-sm font-medium text-case-muted">{item.eyebrow}</p>
                )}
                <p className="w-full font-display text-lg font-bold text-case-ink">{item.title}</p>
                <BodyParagraphs body={item.body} />
              </div>
              <div className="w-full lg:flex-1">
                <CaseImage
                  src={item.imageSrc}
                  alt={item.imageCaption}
                  caption={item.imageCaption}
                  className={item.imageSrc ? "aspect-[10/7] w-full" : "h-[260px] lg:h-[400px]"}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="flex w-full flex-col gap-10 border-b border-case-border px-5 py-16 lg:gap-14 lg:px-30 lg:py-25">
        <SectionHeading>The outcome</SectionHeading>

        <CaseImage
          src={cs.outcomeImageSrc}
          alt={cs.outcomeImageCaption}
          caption={cs.outcomeImageCaption}
          className={cs.outcomeImageSrc ? "aspect-[1201/340] w-full" : "h-[320px] lg:h-[500px]"}
        />

        <div className="flex flex-col gap-6 lg:flex-row">
          {cs.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-1 flex-col items-start gap-3 rounded-xl border border-case-border bg-white p-6 lg:p-8"
            >
              <p className="font-display text-[32px] font-bold text-case-ink lg:text-[40px]">{metric.value}</p>
              <p className="w-full font-body text-[13px] font-medium uppercase tracking-[0.5px] text-case-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="w-full font-body text-base leading-[26px] text-case-ink">{cs.outcomeClosing}</p>
      </section>

      {/* Conclusion */}
      <section className="flex w-full flex-col gap-10 px-5 pt-16 pb-20 lg:gap-14 lg:px-30 lg:pt-25 lg:pb-30">
        <SectionHeading>Reflections & learnings</SectionHeading>
        <p className="w-full font-body text-base leading-[26px] text-case-ink">{cs.reflection}</p>
        <hr className="w-full border-t border-case-border" />
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-body text-sm text-case-muted">
            © {new Date().getFullYear()} Jack Stewart. Built for portfolio context.
          </p>
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={iconArrowRight}
              alt=""
              className="h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-bold text-case-ink">Back to home</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
