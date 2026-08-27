import iconChevron from "../assets/icon-chevron.svg";
import iconDownload from "../assets/icon-download.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import PillButton from "./PillButton";

export default function Hero() {
  return (
    <section className="relative flex w-full min-h-[100svh] flex-col justify-center gap-10 px-5 py-16 lg:min-h-[calc(100svh-88px)] lg:justify-center lg:gap-20 lg:px-30 lg:py-0">
      <div className="flex flex-col gap-10 lg:gap-20">
        <h1 className="font-display text-[32px] font-bold leading-[1.1] text-ink lg:text-[40px]">
          Hi, I’m jack, a hands-on UX designer and strategist who ensures people are at the core of tech
          products
        </h1>

        <hr className="w-full border-t border-ink" />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <p className="flex-1 font-display text-lg leading-[1.4] text-ink lg:max-w-[941px] lg:text-2xl">
            UX designer with over 5 years of experience turning ambiguious problems into clear solutions
            that connect to the business objectives. Expertise in working in enterprise, agency and
            in-house roles. Currently based out of London.
          </p>

          <div className="flex flex-col items-start gap-5">
            <PillButton
              href="/Jackstewart_resume_Aug26_.pdf"
              download
              icon={iconDownload}
              variant="accent"
            >
              Download CV
            </PillButton>
            <PillButton
              href="https://www.linkedin.com/in/jack-stewart-design/"
              external
              icon={iconLinkedin}
              variant="accent"
            >
              Contact me on LinkedIn
            </PillButton>
          </div>
        </div>
      </div>

      <a
        href="#work"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 opacity-80 transition-opacity hover:opacity-100"
      >
        <span className="font-body text-base leading-6 text-[#2c2c2e]">See my work</span>
        <img src={iconChevron} alt="" className="h-[37.5px] w-[75px]" aria-hidden="true" />
      </a>
    </section>
  );
}
