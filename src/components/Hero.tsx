import { useEffect, useRef, useState } from "react";
import iconChevron from "../assets/icon-chevron.svg";
import iconDownload from "../assets/icon-download.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconMail from "../assets/icon-mail.svg";
import MagnifyTitle from "./MagnifyTitle";
import PillButton from "./PillButton";

const EMAIL = "jackstewdesign@gmail.com";

export default function Hero() {
  const [toast, setToast] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  function showToast(message: string) {
    setToast(message);
    setToastVisible(true);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setToastVisible(false), 2400);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback for browsers without the async clipboard API.
      const el = document.createElement("textarea");
      el.value = EMAIL;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    showToast("Email copied to clipboard");
  }

  return (
    <section className="relative flex w-full min-h-[100svh] flex-col justify-center px-5 py-16 lg:min-h-[calc(100svh-88px)] lg:justify-center lg:px-30 lg:py-0">
      <div className="flex flex-col gap-10 lg:gap-20">
        <MagnifyTitle
          text="Hi, I’m Jack, a hands-on UX designer and strategist who ensures people are at the core of tech products."
          className="font-display text-[32px] font-bold leading-[1.3] text-ink lg:text-[40px]"
        />

        <hr className="w-full border-t border-ink" />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <p className="flex-1 font-display text-lg leading-[1.4] text-ink lg:max-w-[941px] lg:text-2xl">
            Product designer with 5+ years of experience across Fintech, enterprise SaaS, and digital
            agencies, turning ambiguous problems into clear solutions that drive the business
            objectives. I’ve had success securing funding twice and designing an end-to-end product
            suite. Based out of London.
          </p>

          <div className="flex flex-col items-start gap-5">
            <PillButton
              href="/Jackstewart_GENCV.pdf"
              download
              icon={iconDownload}
              variant="accent"
              onClick={() => showToast("CV downloaded")}
            >
              Download CV
            </PillButton>
            <PillButton
              onClick={copyEmail}
              icon={iconMail}
              iconClassName="h-4 w-4"
              variant="accent"
            >
              Copy email
            </PillButton>
            <PillButton
              href="https://www.linkedin.com/in/jack-stewart-design/"
              external
              icon={iconLinkedin}
              variant="accent"
            >
              My LinkedIn
            </PillButton>
          </div>
        </div>
      </div>

      {/* In normal flow on mobile (24px below the CTA buttons); pinned to the
          bottom-centre of the hero from `lg` up. */}
      <a
        href="#work"
        className="mt-6 flex flex-col items-center gap-3 self-center opacity-80 transition-opacity hover:opacity-50 lg:absolute lg:bottom-8 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
      >
        <span className="font-body text-base leading-6 text-[#2c2c2e]">See my work</span>
        <img src={iconChevron} alt="" className="h-[37.5px] w-[75px]" aria-hidden="true" />
      </a>

      {/* Action-confirmation toast — fixed to the bottom-centre of the viewport. */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-5"
      >
        <div
          className={`rounded-full bg-charcoal px-5 py-3 font-body text-base font-medium text-canvas shadow-lg transition-all duration-300 ${
            toastVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
          role="status"
        >
          {toast || " "}
        </div>
      </div>
    </section>
  );
}
