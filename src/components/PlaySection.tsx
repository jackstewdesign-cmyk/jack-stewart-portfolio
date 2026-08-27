import playImgA from "../assets/photo-cliff.jpg";
import playImgDune from "../assets/photo-placeholder.jpg";
import waveformImg from "../assets/waveform-placeholder.jpg";

/**
 * Bento-style photo grid — mirrors Figma node 27:1135 ("Frame 11"), the
 * updated /Play layout. On large screens it's a 3-column grid with two
 * portrait photos spanning two rows each; below `lg` everything stacks into
 * a single column in the same reading order. Images use aspect-ratio rather
 * than the fixed pixel heights in the source frame so the grid stretches
 * fluidly at any breakpoint instead of being locked to the Figma frame's
 * 744px width. The two row-spanning photos use a relative wrapper + absolute
 * `inset-0` image (same technique as the Figma export) so they fill their
 * spanned grid rows exactly rather than imposing their own aspect ratio on
 * the row track.
 */
export default function PlaySection() {
  return (
    <section id="play" className="flex w-full flex-col gap-10 px-5 pt-16 pb-20 lg:px-30 lg:pt-20 lg:pb-28">
      <p className="font-display text-xl font-bold leading-[28px] text-ink">/ Play</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col items-start text-ink lg:col-start-1 lg:row-start-1">
          <h2 className="font-display text-[32px] font-bold leading-[48px] lg:text-[40px]">Play</h2>
          <p className="font-body text-base leading-6">
            Other things that make up my life are less relevant to work, but they shape who I am and
            the same ideas and processes still work their way into my career
          </p>
        </div>

        <div className="relative aspect-[232/350] w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:aspect-auto">
          <img src={playImgA} alt="" className="absolute inset-0 h-full w-full rounded-2xl object-cover" />
        </div>

        <img
          src={playImgDune}
          alt=""
          className="aspect-[232/192] w-full rounded-2xl object-cover lg:col-start-3 lg:row-start-1"
        />

        <div className="flex flex-col items-start gap-6 lg:col-start-1 lg:row-start-2">
          <div className="flex w-full flex-col items-start gap-3">
            <p className="w-full font-display text-xl font-bold leading-[28px] text-ink">Music & Djing</p>
            <img src={waveformImg} alt="" className="aspect-[668/138] w-full rounded-2xl object-cover" />
          </div>
          <p className="w-full font-display text-xl font-bold leading-[28px] text-ink">
            Photography & travel
          </p>
        </div>

        <div className="relative aspect-[232/292] w-full lg:col-start-3 lg:row-span-2 lg:row-start-2 lg:aspect-auto">
          <img src={playImgA} alt="" className="absolute inset-0 h-full w-full rounded-2xl object-cover" />
        </div>

        <img
          src={playImgDune}
          alt=""
          className="aspect-[232/189] w-full rounded-2xl object-cover lg:col-start-1 lg:row-start-3"
        />

        <img
          src={playImgDune}
          alt=""
          className="aspect-[232/189] w-full rounded-2xl object-cover lg:col-start-2 lg:row-start-3"
        />
      </div>
    </section>
  );
}
