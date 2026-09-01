import eduCover from "../assets/aplo/EDU cover.png";
import eduOutcomes from "../assets/aplo/Outcomes.png";
import eduProcessOverview from "../assets/aplo/process overview.png";
import eduServiceMap from "../assets/aplo/Process 3.png";
import eduSketch from "../assets/aplo/process 1.png";
import eduStudentDashboard from "../assets/aplo/Process 2.png";
import dsComponents from "../assets/lendhub-ai/components.png";
import dsCover from "../assets/lendhub-ai/cover.png";
import dsDesignMd from "../assets/lendhub-ai/designmd.png";
import dsProcessOverview from "../assets/lendhub-ai/process-overview.png";
import dsOutcome from "../assets/lendhub-ai/outcome.png";
import dsVariables from "../assets/lendhub-ai/variables.png";
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
// `lendhub-property-loans` (Figma node 46:1320), `lendhub-1` (Figma node
// 74:2149) and `aplo-education-research` (Figma node 101:2448) are fully
// written real case studies with real screenshots — use them as the
// reference for how to fill any future ones in.

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

/** Figma node 74:2149 ("case-study-Lendhubai") — real project, real copy, real screenshots. */
const lendhubDesignSystemCaseStudy: CaseStudy = {
  client: "Lendhub",
  timeline: "1 Month (2026)",
  myRole: "UX/UI manager",
  tags: ["Design systems", "AI strategy"],
  heroImageSrc: dsCover,
  heroImageCaption: "Lendhub brand mark",
  problemIntro:
    "Lendhub had no formal design system when I joined. That meant rework on every wireframe and drift between products as they were built as well as poor developer handover. A large part of my role involved rapid prototype iteration but without a system, each one diverged a little further from the last, and usability suffered as a result. A large part of the engineer's role within Lendhub was to create web-apps for internal use as well as create test projects to explore ideas. The products were not only difficult to use, but as more and more was built, the drift between the early designs and later designs became large.",
  howMightWe:
    "“How might we create a design system from the ground up that evolves with the business’ needs”",
  painPoints: [
    {
      title: "No formal design system",
      body: "Every new wireframe meant rebuilding decisions from scratch, and inconsistencies compounded as the product grew. Without a system, the business couldn't prototype or scale design work quickly.",
    },
    {
      title: "Large drift during ai use",
      body: "By nature, general AI 'vibe-coding' is inconsistent, resulting in poor user experiences and excess time spent on re-work. The guard railing system I built directly reduced this.",
    },
  ],
  processSteps: [
    {
      title: "Figma design system",
      body: "This was the first part of the puzzle. Upon arriving at Lendhub, there was only scattered components from various agency and internal projects. I first reviewed all of the components across multiple files, collated these, and built out a list of what needed to go into the design system, styles, components and tied it all back to variables. From there I fixed what was there, built out new styles, components, so on and so forth.",
    },
    {
      title: "Ai design package",
      body: "Once the component library was sorted, the next part of the puzzle was adapting it to AI use and the need to create guardrails for the systems to work between became apparent. This process involved a lot of time on different articles, internet forums and such, trying to find consistency in the best way forward. I landed on referencing companies such as Wise and Vercel to see how they build up their design systems, and from that built out a design.md file, the actual rules AI tools reference instead of guessing from figma each time.",
    },
    {
      title: "Ongoing maintenance",
      body: "Design systems are living, breathing parts of any product team's toolset. With the Figma library and the AI system both in place, the ongoing piece was keeping them both up to date, and evolving with new components that were inevitably added. Maintaining the design.md file was a learning curve at first and required a close eye, since keeping a human-facing system and a machine-facing one lined up isn't something most workflows account for. It settled into a routine, update the Figma system, then update the file that governs how AI reads it.",
    },
  ],
  processImageSrc: dsProcessOverview,
  processImageCaption:
    "The basis of a robust design system is a systematic component library that is broken up into bite-sized sections, this was broken up utilising the atomic design system methodology of: atoms > molecules > organisms > templates.",
  processShowcase: [
    {
      eyebrow: "Output",
      title: "Bringing it all back to variables",
      body: "One of the key changes that brought the design system into a more robust state was introducing variables and linking those back to components, this is crucial to the maintenance of design systems and ensures the system can grow without too many cracks. An analogy to variables is this: variables function like a restaurant menu's Chef's Daily Special: instead of hardcoding prices across every single combo deal, you link them to one central label so that updating the dish's price once instantly recalculates every menu item down the line. For a sustainable design system this is absolutely essential and it also helps with AI understanding later down the line.",
      imageCaption: "The variables panel — button tokens linked back to core colour styles",
      imageSrc: dsVariables,
    },
    {
      eyebrow: "Design",
      title: "Accounting for every possibility",
      body: "A good component library accounts for as many (regular) use cases as possible, so when putting components together I'd always ensure components such as buttons included icons on both sides, and there was error states for all components that needed it.",
      imageCaption: "Button component variants covering icon placement, size and state",
      imageSrc: dsComponents,
    },
    {
      eyebrow: "AI guardrails",
      title: "The nuance of a DESIGN.md",
      body: "When building out the markdown file to direct an agent, the basics such as what text styles to use, and what colours to use were simple. As I found out the product description and the Do's and Don'ts part of the markdown was where the real difference was sat and this part really needed human finesse. This involved a lot of scanning through the existing wireframes and web-apps and finding out where it would differ for the worse and writing a list of don'ts against those. For example I found although I'd told the agent otherwise, it would consistently use the brand's primary purple as a background colour for menu's and such although it didn't make sense, so I had to create a rule banning this action.",
      imageCaption: "The DESIGN.md file's Do's and Don'ts section",
      imageSrc: dsDesignMd,
    },
  ],
  outcomeImageSrc: dsOutcome,
  outcomeImageCaption:
    "The design system as a single source of truth — component library, token architecture and the DESIGN.md that governs AI use",
  metrics: [
    { value: "Source of truth", label: "For platform suite, marketing materials and internal tools" },
    { value: "Less rework", label: "Reduced re-working of designs post vibe-coding" },
  ],
  outcomeClosing:
    "In building up a design system for all relevant use cases I brought up the design maturity and capability of the business. These systems allow quality design to be significantly more accessible to everyone, it allowed marketing staff who had minimal design experience to utilise the assets I created to deliver consistent, quality outputs, further building brand consistency. It also allowed the engineering team to have a single point of reference for components, meaning that engineering outputs remained consistent, and made their workflow much faster as well.",
  reflection:
    "In building up a design system for all relevant use cases I brought up the design maturity and capability of the business. These systems allow quality design to be significantly more accessible to everyone, it allowed marketing staff who had minimal design experience to utilise the assets I created to deliver consistent, quality outputs, further building brand consistency.",
};

/** Figma node 101:2448 ("case-study-Education") — real project, real copy, real screenshots. */
const aploEducationCaseStudy: CaseStudy = {
  client: "Department for Education",
  timeline: "4 Months (2023)",
  myRole: "UX design consultant",
  tags: ["Usability testing", "Research", "Prototyping"],
  heroImageSrc: eduCover,
  heroImageCaption: "EDU SA — Department for Education, South Australia",
  problemIntro:
    "The Department for Education delivers state-funded education for the state of South Australia. The department has to cater for every student in their midst, from pre-school to senior school, and in this, students often fall through the cracks. In this specific case, this project came about because many children who require extra support to access education fall behind, because the process teachers go through to provide evidence to justify support takes too long. The average form will take about 10 hours to complete, inevitably leaving students without the support they need to access the same education as everyone else.",
  howMightWe:
    "“How might we create a prototype that will allow teaching staff to supply evidence or support needed in a way that gives students agency over their own learning.”",
  painPoints: [
    {
      title: "Teachers do not have the time to fill out the existing form",
      body: "The existing form to show evidence that a student needs support takes around 10 hours. Teachers do not have the tools to show evidence needed, nor the time to fill out information if they had it.",
    },
    {
      title: "Students have no agency over their own learning",
      body: "Students have no connection to their learning and the department. This leads to them being less likely to provide schools with the information needed to get the support they need too.",
    },
  ],
  processSteps: [
    {
      title: "Early prototype & planning",
      body: "The project team had already been out to schools, and ran discovery workshops with teachers & executive staff, as a result we started off with a really basic prototype that ran off ipads. This was entirely black and white, it was intentionally unfinished so that users only focussed on the basics. This came alongside planning usability tests for all user groups, those being; students (of all ages), parents, teachers, teaching assistants. They were designed in a way that met our usability testing goals as well as to fill gaps missed in prior research.",
    },
    {
      title: "Usability testing & iteration",
      body: "With everything being in place a colleague and I went around to over 20 different schools around the state. Each time I would run usability testing, gather insights in it's respective category and pass the feedback onto the UI designer to update the prototype. The style of prototype varied between users, for example the prototype for the teaching staff included a whole different set of screens and subsequent questions.",
    },
    {
      title: "Client delivery",
      body: "After 3 months of testing, updating, testing and more updating the team and I packaged this all up into an 'insights report' to the executive staff. Linking all of the prototype features and findings to their 4 areas of impact, being: Equity & excellence, learner agency, effective learners, and wellbeing. Along with the prototype I put together a 'service-mapping' piece to better show the value of the digital product to that audience.",
    },
  ],
  processImageSrc: eduProcessOverview,
  processImageCaption:
    "The prototype ended up including specific views and levels of information for different users, students, teachers and parents all had very different needs from the system, hence multiple versions of it being prototyped and designed.",
  processShowcase: [
    {
      eyebrow: "Design",
      title: "Starting basic to garner the feedback we needed",
      body: "Although this sketch is a crude example, starting out I genuinely drew this and others like it to communicate with students, parents and teachers. Using informal sketches like this helped to communicate with users in a way that they understood. It furthermore helped to gain trust from teachers, as they were generally jaded by the department for education, by showing that we were listening to them.",
      imageCaption: "An early hand-drawn sketch of the parent view, used to talk through the concept with families and teachers",
      imageSrc: eduSketch,
    },
    {
      eyebrow: "Design",
      title: "Emoji’s to communicate feelings",
      body: "An intriguing and maybe obvious learning from this project was how well communicating with emoji's and imagery worked for children. Many of the children I ran usability testing with were not able to communicate easily, but the moment we altered the student prototype to involve the emoji's for 'how are you feeling?', it put a smile on the students' faces because they could understand it and felt heard too.",
      imageCaption: "The student dashboard — a friendly check-in with emoji for “How are you feeling?”",
      imageSrc: eduStudentDashboard,
    },
    {
      eyebrow: "Output",
      title: "Different outputs for different stakeholders",
      body: "We knew that when we had meetings with executive staff, they could all too easily get caught up in the details of the prototype. Many of them were not teachers themselves and were too removed from the day-to-day stresses of teachers. In order to get their feedback we needed to create a version of the prototypes that spoke to overarching processes, so I created this service-design map to show how different users interacted.",
      imageCaption: "The service-design map showing how support requests flow between Support360 and the Personalised Learning Plan",
      imageSrc: eduServiceMap,
    },
  ],
  outcomeImageSrc: eduOutcomes,
  outcomeImageCaption:
    "Mid-fidelity teacher screens from the final prototype — the student plan, profile and add-action views",
  metrics: [
    { value: "150+", label: "over 150 stakeholders collaborated with, increasing engagement" },
    { value: "Funding secured", label: "After 3 previously failed attempts" },
  ],
  outcomeClosing:
    "After the 4 months of driving around the state of South Australia and engaging with over 150 stakeholders via usability testing, the subsequent insights report and prototype went on to be presented to the executive team. They reviewed the report and chose to support the product being created, so children in need can get access to the support they need to learn. Since I left Aplo, the product has gone into full production and is being used today.",
  reflection:
    "If I was to do this again, I would have asked the project team more details at the start as to how much and what research they had done. We found ourselves in a tricky situation early on where the research that was done was not to a high enough level, and as a result we had to work some questions into our usability testing. The biggest learning from this one was the importance of putting the user at the centre of the product, and how great the results can be if that is done. This is truly one of the pieces of work I am most proud of.",
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
    title: "Building a design system and translating it for quality ai-use",
    chipLabel: ["Design systems", "AI strategy"],
    chipCompany: "LH",
    description:
      "Creating, maintaining and then translating it into a DESIGN.md file to enable engineers and reduce re-work.",
    image: dsCover,
    caseStudy: lendhubDesignSystemCaseStudy,
  },
  {
    id: "aplo-education-research",
    role: "User-experience consultant - Aplo",
    title: "Working with schools to build a solution & deliver funding",
    chipLabel: ["Research", "Usability testing"],
    chipCompany: "Aplo",
    description:
      "Carrying out usability testing and prototyping around the state to create a prototype worthy of securing large-scale funding.",
    image: eduCover,
    caseStudy: aploEducationCaseStudy,
  },
];
