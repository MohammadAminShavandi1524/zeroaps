import ProcessAccordion from "./ProcessAccordion";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the requirements, examine the existing system, and identify constraints. Define what a successful result should do.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Choose the technical approach, define interfaces and dependencies, and weigh the trade-offs.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement with clear code, understandable configuration, and security in mind.",
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "Check functionality, reliability, performance, and security. Address weaknesses and document the changes that matter.",
  },
];

export default function Process() {
  return (
    <section
      id="process-section"
      aria-labelledby="process-heading"
      className="border-border bg-background relative w-full border-b"
    >
      <div className="max-w-container-max mx-auto w-full px-4 py-20 md:px-8 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <h2
            id="process-heading"
            className="text-primary mb-4 font-sans text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] font-medium tracking-[-0.04em]"
          >
            How we work
          </h2>

          <p className="text-secondary max-w-[650px] text-[15px] leading-[1.75] sm:text-[17px]">
            We start with the problem, understand the environment, and make
            technical decisions we can explain and test.
          </p>
        </div>

        <ProcessAccordion steps={processSteps} />
      </div>
    </section>
  );
}
