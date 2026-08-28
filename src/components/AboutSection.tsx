import aboutImg from "../assets/photo-jack.jpg";
import iconDownload from "../assets/icon-download.svg";
import PillButton from "./PillButton";

const thingsILove = [
  "Just learning new things",
  "Listening to music",
  <>
    <strong className="font-semibold">Attempting</strong> to make music
  </>,
  "Running (far too much)",
  "Seeing the world",
];

export default function AboutSection() {
  return (
    <section id="about" className="flex w-full flex-col gap-10 px-5 py-16 lg:px-30 lg:py-20">
      <p className="font-display text-xl font-bold leading-[28px] text-ink">/ About</p>

      <div className="flex flex-col items-start justify-center gap-10 lg:flex-row lg:gap-[60px]">
        <div className="flex flex-1 flex-col items-start justify-center gap-5">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-[32px] font-bold leading-[48px] text-ink lg:text-[40px]">
                About me
              </h2>
              <PillButton
                href="/Jackstewart_resume_Aug26_.pdf"
                download
                icon={iconDownload}
                variant="accent"
              >
                Download CV
              </PillButton>
            </div>
            <div className="flex w-full flex-col gap-4">
              <p className="w-full font-body text-base leading-6 text-ink">
                UX designer with 5+ years experience leading products from early-stage discovery to
                technical delivery across Fintech, SaaS, and enterprise ecosystems. Grounded in a deep
                user understanding, qualitative research, and facilitation, with the technical ability
                to build scalable design systems and work closely with engineering teams.
              </p>
              <p className="w-full font-body text-base leading-6 text-ink">
                I combine human-centred fundamentals with modern AI tooling to advocate for the users
                while driving measurable business impact.
              </p>
              <p className="w-full font-body text-base leading-6 text-ink">
                Some of the projects I am most proud of, is my usability testing work with the
                education department, and setting up design standards and systems at Lendhub.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start text-ink">
            <p className="w-full font-display text-xl font-bold leading-[28px]">Things I love</p>
            <div className="w-full font-body text-base">
              {thingsILove.map((item, i) => (
                <p key={i} className="mb-2 leading-6 last:mb-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[260px] w-full shrink-0 lg:h-[389px] lg:w-[600px]">
          <img
            src={aboutImg}
            alt="Jack Stewart"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
