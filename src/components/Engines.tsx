import React from "react";
import CodeBlock from "./CodeBlock";

const engines = [
  {
    name: "Ollama (Default)",
    description:
      "Uses local models for free, private, and offline generation. Automatically falls back to heuristic mode if unavailable.",
    command: "gac --engine ollama",
  },
  {
    name: "Heuristic",
    description:
      "A smart, rule-based engine that works instantly without any LLM. No setup required.",
    command: "gac --engine none",
  },
  {
    name: "OpenAI",
    description:
      "Leverage models like GPT-4o-mini via API. Requires an API key.",
    command: "gac --engine openai",
  },
  {
    name: "Gemini",
    description:
      "Use Google's Gemini models, like Gemini 1.5 Flash. Requires an API key.",
    command: "gac --engine gemini",
  },
];

const Engines: React.FC = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Powerful Engines
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            Choose the generation engine that fits your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engines.map((engine) => (
            <div
              key={engine.name}
              className="bg-panda-bg-light/50 p-6 rounded-lg ring-1 ring-panda-border flex flex-col"
            >
              <h3 className="text-xl font-bold text-white">{engine.name}</h3>
              <p className="mt-2 text-panda-fg-dim flex-grow">
                {engine.description}
              </p>
              <div className="mt-4">
                <CodeBlock
                  code={engine.command}
                  language="bash"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engines;
