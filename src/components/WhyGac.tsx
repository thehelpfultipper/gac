import React from "react";

const reasons = [
  "Most commit generators require paid API keys.",
  "Many produce verbose, multi-line messages.",
  "gac keeps it short (≤72 chars), structured, and scannable.",
  "Perfect for teams using Conventional Commits or changelog automation.",
  "Works entirely offline with zero cost using the default engine.",
];

const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-panda-pink-light"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const WhyGac: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-panda-bg/70 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why gac?
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            A better approach to commit messages.
          </p>
        </div>
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-panda-bg-light/50 rounded-lg ring-1 ring-panda-border"
            >
              <div className="flex-shrink-0">
                <CheckIcon />
              </div>
              <p className="ml-4 text-panda-fg">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGac;
