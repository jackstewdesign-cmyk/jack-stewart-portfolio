import aboutImg from "../assets/photo-jack.jpg";
import iconDownload from "../assets/icon-download.svg";
import clientLendhub from "../assets/clients/lendhub.svg";
import clientTopbunk from "../assets/clients/topbunk.png";
import clientOuttaSpatial from "../assets/clients/outta-spatial.png";
import clientPeoplesFirstBank from "../assets/clients/peoples-first-bank.png";
import clientAplo from "../assets/clients/aplo.png";
import clientEduSa from "../assets/clients/edu-sa.png";
import clientGdayGroup from "../assets/clients/gday-group.png";
import clientSapol from "../assets/clients/sapol.png";
import PillButton from "./PillButton";
import { useBobble } from "../hooks/useBobble";

const thingsILove = [
  "Just learning new things",
  "Listening to music",
  <>
    <strong className="font-semibold">Attempting</strong> to make music
  </>,
  "Running (far too much)",
  "Seeing the world",
];

// `tile` logos are supplied as full-bleed coloured squares (rounded 12px,
// object-cover); the rest are transparent marks centred in the cell.
const clients = [
  { name: "LendHub", logo: clientLendhub, tile: false, url: "https://www.lendhub.co.uk/" },
  { name: "Topbunk", logo: clientTopbunk, tile: true, url: "https://www.topbunk.com.au/" },
  { name: "Aplo", logo: clientAplo, tile: false, url: "https://aplodigital.com.au/" },
  { name: "Outta Spatial", logo: clientOuttaSpatial, tile: true, url: "https://outtaspatial.au/" },
  {
    name: "People First Bank",
    logo: clientPeoplesFirstBank,
    tile: false,
    url: "https://www.peoplefirstbank.com.au/",
  },
  { name: "EDU SA", logo: clientEduSa, tile: false, url: "https://www.education.sa.gov.au/" },
  {
    name: "G'Day Group",
    logo: clientGdayGroup,
    tile: false,
    url: "https://careers.gdaygroup.com.au/about",
  },
  {
    name: "South Australia Police",
    logo: clientSapol,
    tile: false,
    url: "https://www.police.sa.gov.au/",
  },
];

function BobbleLogo({ client }: { client: (typeof clients)[number] }) {
  const { ref, onPointerEnter } = useBobble<HTMLImageElement>();

  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${client.name} (opens in a new tab)`}
      onPointerEnter={onPointerEnter}
      className="flex h-20 w-20 shrink-0 items-center justify-center transition-opacity hover:opacity-70 wide:h-[120px] wide:w-[120px]"
    >
      <img
        ref={ref}
        src={client.logo}
        alt={client.name}
        className={
          client.tile
            ? "h-full w-full rounded-xl object-cover"
            : "max-h-full max-w-full rounded-none object-contain"
        }
      />
    </a>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="flex w-full flex-col gap-10 px-5 py-16 lg:px-30 lg:py-20">
      <p className="font-display text-xl font-bold leading-[28px] text-ink">/ About</p>

      <div className="flex w-full flex-col gap-10 row:flex-row row:items-center">
        <div className="flex flex-1 flex-col items-start gap-6">
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
                to build scalable design systems and work closely with engineering teams. I combine
                human-centred fundamentals with modern AI tooling to advocate for the users while
                driving measurable business impact.
              </p>
              <p className="w-full font-body text-base leading-6 text-ink">
                Some of the projects I am most proud of, is my usability testing work with the
                education department, and setting up design standards and systems at Lendhub.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-4 text-ink">
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

        <div className="h-[260px] w-full shrink-0 row:h-[389px] row:max-wide:flex-1 wide:w-[600px]">
          <img
            src={aboutImg}
            alt="Jack Stewart"
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <p className="font-display text-xl font-bold leading-[28px] text-ink">
          Clients I&rsquo;ve worked with
        </p>
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 lg:justify-between lg:gap-x-0">
            {clients.map((client) => (
              <BobbleLogo key={client.name} client={client} />
            ))}
          </div>
          <p className="w-full font-body text-xs italic leading-4 text-[#8e8e88]">
            I worked with Topbunk, Aplo &amp; outta-spatial in an agency/consultancy capacity, so
            clients such as, People First Bank &amp; Edu SA were facilitated through working with
            those businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
