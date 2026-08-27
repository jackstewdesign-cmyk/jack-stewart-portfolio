import educationComingSoon from "../assets/aplo/education-coming-soon.png";
import comingSoonImage from "../assets/lendhub/coming-soon.png";
import heroImage from "../assets/lendhub/hero-image.png";
import outcomeComposite from "../assets/lendhub/outcome-composite.png";
import processApplicationForm from "../assets/lendhub/process-application-form.png";
import processCalculator from "../assets/lendhub/process-calculator.png";
import processLoanStatus from "../assets/lendhub/process-loan-status.png";
import processOverview from "../assets/lendhub/process-overview.png";

export type ChipCompany = "LH" | "Aplo" | "Freelance";

export interface CaseStudyPainPoint {
  title: string;
  body: string;
}

/** A step in the compact numbered "how I approached it" summary. */
export interface CaseStudyProcessStep {
  title: string;
  body: string;
}

/**
 * One deliverable in the expanded alternating text/image showcase below the
 * process summary. `body` can be one paragraph or several. `imageSrc` is a
 * real screenshot when available; otherwise the section falls back to the
 * gray "artwork goes here" placeholder box.
 */
export interface CaseStudyShowcaseItem {
  eyebrow?: string;
  title: string;
  body: string | string[];
  imageCaption: string;
  imageSrc?: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

/** The full case-study page content — mirrors Figma's "case-study-template" (node 46:1182). */
export interface CaseStudy {
  client: string;
  timeline: string;
  myRole: string;
  /** Chips shown under the hero description (see design_1.md §9.3 for the company → color mapping). */
  tags: string[];
  /** Real hero visual when available; falls back to the placeholder box + heroImageCaption otherwise. */
  heroImageSrc?: string;
  heroImageCaption: string;
  problemIntro: string;
  howMightWe: string;
  painPoints: [CaseStudyPainPoint, CaseStudyPainPoint];
  processSteps: CaseStudyProcessStep[];
  /** Real main process image when available; falls back to the placeholder box + processImageCaption otherwise.
   *  With a real image, processImageCaption renders as a plain caption paragraph beneath it instead. */
  processImageSrc?: string;
  processImageCaption: string;
  processShowcase: CaseStudyShowcaseItem[];
  /** Optional — omit when the process section ends right after the showcase rows. */
  processClosing?: string;
  outcomeImageSrc?: string;
  outcomeImageCaption: string;
  metrics: CaseStudyMetric[];
  outcomeClosing: string;
  reflection: string;
}

export interface Project {
  id: string;
  role: string;
  title: string;
  /** One chip, or several (e.g. "Design systems" + "AI strategy") — all rendered in the same company color. */
  chipLabel: string | string[];
  chipCompany: ChipCompany;
  description: string;
  image?: string;
  /** Shows a disabled "View project" button instead of a link — for a project not published yet. */
  comingSoon?: boolean;
  /** Omits this project from the homepage Work list (still reachable at /work/:id directly). */
  hidden?: boolean;
  caseStudy: CaseStudy;
}

// TODO: replace with your real case studies — role, title, category chip,
// description and a project image. Chip color is keyed to company (see
// design_1.md §9.3): LH = purple, Aplo = charcoal, Freelance = orange.
//
// `caseStudy` feeds the /work/:id template page (Figma node 32:142 / 46:1182).
// The two "coming soon" entries below (lendhub-1, aplo-education-research)
// still share the same sample copy from the Figma file (a "MetroFlow Systems"
// case study) — swap in your own write-up per project. Their View buttons are
// disabled (`comingSoon: true`) so the sample pages aren't linked anywhere.
// `lendhub-property-loans` (top of the list) is a fully written real case
// study (Figma node 46:1320) — use it as the reference for how to fill the
// others in, including real screenshots via *ImageSrc fields.
const sampleCaseStudy: CaseStudy = {
  client: "MetroFlow Systems",
  timeline: "6 Months (2025)",
  myRole: "Lead UX Researcher & Designer",
  tags: ["UX strategy", "UI design"],
  heroImageCaption: "Case study hero preview — Web dashboard mockups",
  problemIntro:
    "Dispatchers must monitor over 15 concurrent data streams to make split-second routing decisions. The system failed to prioritize critical events, forcing operators to manually scan hundreds of rows of raw vehicle telematics to locate anomalies.",
  howMightWe:
    "“How might we surface critical transit anomalies proactively so dispatchers can respond instantly, without losing global visibility over the fleet?”",
  painPoints: [
    {
      title: "Alert Blindness",
      body: "Over 120 critical alert rings occurred per hour, with no visual hierarchy to differentiate a flat tire from an engine failure.",
    },
    {
      title: "Disjointed Workflows",
      body: "Dispatchers had to copy telemetry IDs across three separate browser tabs to complete a single vehicle rerouting loop.",
    },
  ],
  processSteps: [
    {
      title: "Field Research & Audits",
      body: "Co-piloted three full night shifts alongside telemetry dispatchers, mapping their cognitive workflow and noting exactly when alert fatigue set in.",
    },
    {
      title: "Interactive Wireframes",
      body: "Synthesized findings into rapid interactive prototypes, testing a tiered notifications dashboard concept with varying levels of information density.",
    },
    {
      title: "Usability Validation",
      body: "Iterated through live scenario testing with real dispatcher operators, timing task completion speeds and observing eye-tracking pathways.",
    },
  ],
  processImageCaption: "User flow and primary wireframe architecture iterations",
  processShowcase: [
    {
      title: "Field Research & Audits",
      body: "Co-piloted three full night shifts alongside telemetry dispatchers, mapping their cognitive workflow and noting exactly when alert fatigue set in.",
      imageCaption: "Field notes and shadowing observations from the three overnight dispatcher shifts",
    },
    {
      title: "Interactive Wireframes",
      body: "Synthesized findings into rapid interactive prototypes, testing a tiered notifications dashboard concept with varying levels of information density.",
      imageCaption: "Early interactive wireframes exploring a tiered notification hierarchy",
    },
    {
      title: "Usability Validation",
      body: "Iterated through live scenario testing with real dispatcher operators, timing task completion speeds and observing eye-tracking pathways.",
      imageCaption: "Usability test recordings and think-aloud session annotations",
    },
  ],
  processClosing:
    "Throughout the design cycles, we prioritized progressive disclosure. Telemetry detail screens were re-architected into modular canvas components that dispatchers could expand or fold away depending on their immediate workflow priority.",
  outcomeImageCaption: "High-fidelity web dashboards showcasing final responsive interface solutions",
  metrics: [
    { value: "-42%", label: "Task completion time" },
    { value: "94%", label: "Operator satisfaction score" },
    { value: "2 Days", label: "Average dispatcher onboarding" },
  ],
  outcomeClosing:
    "By structuring the system around proactive anomaly detection rather than manual telemetry analysis, dispatchers transitioned from being passive readers of chaos to structured operational directors. The platform's overall churn rate dropped significantly within its first quarter of live deployment.",
  reflection:
    "Working directly on dispatch floors taught me that enterprise UX cannot survive on isolated aesthetic assumptions. High-density dashboards require deep mechanical empathy for the stress environments operators live in daily. By designing alongside rather than just for the operators, we crafted a system of real, impactful utility.",
};

/** Figma node 46:1320 ("case-study-Lendhub") — real project, real copy, real screenshots. */
const lendhubPropertyLoansCaseStudy: CaseStudy = {
  client: "Lendhub",
  timeline: "4 Months (2026)",
  myRole: "UX/UI manager",
  tags: ["UX strategy", "UI design"],
  heroImageSrc: heroImage,
  heroImageCaption: "Lendhub brand mark",
  problemIntro:
    "Enquiring about and managing loans at Lendhub was a friction-heavy, manual process requiring brokers to constantly call or email staff. Brokers managing multiple deals simultaneously created severe operational bottlenecks and slow turnaround times on their end, often resulting in a broker not choosing Lendhub as their lender of choice. As one broker noted: \"I just want to pick up my phone and instantly see what's happening with my loan.\" This lack of visibility damaged broker trust and directly reduced client retention. All of the above result in brokers being less likely to be returning customers to Lendhub, thus creating a retention risk.",
  howMightWe:
    "“How might we ensure brokers and borrowers have clear, efficient access to their loans and its details as well as clarity during the loan's lifetime.”",
  painPoints: [
    {
      title: "Highly manual processes",
      body: "Brokers and borrowers have no way of independently enquiring and applying for loans, resulting in timely emails back and forth, sapping time.",
    },
    {
      title: "Lack of clarity",
      body: "Lendhub's clients reported having little real-time insight over their loan status(s), reducing internal and external operational efficiency as well as hurting broker retention.",
    },
  ],
  processSteps: [
    {
      title: "Interviews and research",
      body: "Research happened in two main parts, conversations with brokers & staff, and competitor/desktop research to bolster insights and provide inspiration. Given the timeline, interviews had to be informal, rather than a structured research program. I spoke with one of Lendhub's regular clients, talked to industry professionals at a trade show and analysed client calls to hear pain points firsthand. I also collected key points from colleagues across sales, credit and portfolio teams on recurring issues they heard on a day-to-day basis. Desktop research involved looking through various forums and reviews. I used this to further prove or disprove what I was hearing.",
    },
    {
      title: "Interactive prototypes",
      body: "I combined what I'd learnt with the business objectives to shape interactive prototypes, built in the following order: Quick-Calculator > Platform > Application form. Each stage started with intentionally basic low-fidelity prototypes and scaled up from there. AI tools such as Figma Make, Google Stitch and Claude were used extensively to ensure a rapid idea to prototype process, while giving leadership a clearer idea of how the digital platforms could function. As the basic functionalities were agreed upon, wireframes became high-fidelity and utilised elements from our component library to ensure a smooth design to development pipeline.",
    },
    {
      title: "Ongoing evaluation",
      body: "Operating within tight budget and timeline constraints, there was no formal user-testing program, so the approach became: build, ship, observe, and adjust. I used analytics and a review of client call recordings to see where users were struggling, reviewed updated broker feedback and instructed relationship managers to ask open questions about broker processes to validate whether the changes we'd made actually addressed those pain points. That feedback loop shaped where we focused effort next.",
    },
  ],
  processImageSrc: processOverview,
  processImageCaption:
    "The above image shows how I broke up where each product in the suite is used and what teams & questions may come along with that.",
  processShowcase: [
    {
      eyebrow: "Design",
      title: "Quick-Calculator simplification",
      body: "This product was already half-built when I came onboard, engineers had done their best shot at creating bones, and the timeline was extremely tight. I found the best way to do this was to strip information back where it was afforded by the interface, where there was double-ups, and generally starting from a basic interface and building up from there. The hierarchy of information was a task I did in close collaboration with the finance team, and required a deep understanding of how loans are structured.",
      imageCaption: "Quick-Calculator simplification — key screens across the loan offer flow",
      imageSrc: processCalculator,
    },
    {
      eyebrow: "Design",
      title: "Application form tracking",
      body: [
        "This product addressed two key pain points: application forms being highly time-consuming, and users not always having all the information to complete an application right away. Thus, I focused on breaking the form up into manageable pieces, allowing users to save their progress and return to their application at any time.",
        "I explored a traditional step-by-step flow, but because these tasks are not always done in a linear order, a tile-based navigation suited the use case best. Breaking each page into an easy-to-use format involved grouping related inputs together so users could follow the most common path to completion. Additionally, much of the information auto-completes if the broker has previously completed a deal with Lendhub.",
      ],
      imageCaption: "Application form tracking — tile-based navigation across a multi-step form",
      imageSrc: processApplicationForm,
    },
    {
      eyebrow: "Design",
      title: "Loan status management",
      body: "The platform was built around the key pain point of brokers having no visibility into loan progress. Therefore, my goal for this part of the suite was to clearly display loan status without requiring users to pick up the phone or email their contact. I wanted finding a loan status to be as effortless as tracking an online package. I explored various tracking-style layouts to ensure brokers can check their loan status at any time of day and instantly understand where things stand — ultimately reducing the amount of time both the broker and Lendhub's finance team have to spend sending and responding to relatively basic queries.",
      imageCaption: "Loan status management — tracking-style dashboard of in-progress loans",
      imageSrc: processLoanStatus,
    },
  ],
  outcomeImageSrc: outcomeComposite,
  outcomeImageCaption: "Quick-Calculator, Application Form and Platform screens from the finished product suite",
  metrics: [
    { value: "£10m", label: "Enquiries on its launch day" },
    { value: "9 minutes", label: "Average enquiry completion" },
  ],
  outcomeClosing:
    "By designing the product suite as one connected system, Lendhub can now offer brokers an entire loan-lifetime journey in one place, meaning no more chasing updates through a broker's inbox, no more lengthy back-and-forth email chains. Early feedback from Lendhub's clients has been positive, with brokers specifically calling out the Quick-Calculator and application form as being easy to use. The result of the suite is instant, self-serve products that give brokers back time previously lost to basic emails — time they can now spend on the more human parts of the job, such as nurturing client relationships and problem-solving more bespoke deals.",
  reflection:
    "In reflection, what would have helped the product suite get going from the very start would have been to hold more broker workshops and spend more time problem-solving with the finance team, rather than jumping straight into solutions. Otherwise, I think we truly did the best with what we had available to us at the time.",
};

export const projects: Project[] = [
  {
    id: "lendhub-property-loans",
    role: "Lendhub UX/UI Manager",
    title: "Enabling clients to enquire and manage their property loans",
    chipLabel: "UI design",
    chipCompany: "LH",
    description:
      "A full suite of products & services to enable Lendhub clients to better enquire, apply and manage their property loans.",
    image: heroImage,
    caseStudy: lendhubPropertyLoansCaseStudy,
  },
  {
    id: "lendhub-1",
    role: "Lendhub UX/UI Manager",
    title: "Building a design system and translating it for consistent ai-use",
    chipLabel: ["Design systems", "AI strategy"],
    chipCompany: "LH",
    description:
      "A design system that evolved into a relevant claude package to ensure engineering outputs can be carried out at speed without great design drift.",
    image: comingSoonImage,
    comingSoon: true,
    caseStudy: sampleCaseStudy,
  },
  {
    id: "aplo-education-research",
    role: "Aplo user-experience consultant",
    title: "Working with schools to build a solution together",
    chipLabel: ["Research", "User testing"],
    chipCompany: "LH",
    description:
      "Large-scale user-research and testing project with the department for education in order to secure funding for production and state-wide rollout",
    image: educationComingSoon,
    comingSoon: true,
    caseStudy: sampleCaseStudy,
  },
];
