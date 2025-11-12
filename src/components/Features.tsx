import React from "react";
import { FreeIcon } from "./icons/FreeIcon";
import { LockIcon } from "./icons/LockIcon";
import { TargetIcon } from "./icons/TargetIcon";
import { ZapIcon } from "./icons/ZapIcon";
import { PaletteIcon } from "./icons/PaletteIcon";
import { CursorClickIcon } from "./icons/CursorClickIcon";

const features = [
  {
    name: "Free by default",
    description: "Uses local Ollama, meaning no API costs to worry about.",
    icon: FreeIcon,
  },
  {
    name: "Privacy-first",
    description:
      "Your code never leaves your machine. Your work stays private.",
    icon: LockIcon,
  },
  {
    name: "Smart Fallback",
    description:
      "Works seamlessly without any LLM installed using a heuristic engine.",
    icon: TargetIcon,
  },
  {
    name: "Fast",
    description: "Generates 3 diverse options in just a few seconds.",
    icon: ZapIcon,
  },
  {
    name: "Convention-aware",
    description:
      "Supports Conventional Commits, Gitmoji, and plain styles out of the box.",
    icon: PaletteIcon,
  },
  {
    name: "Interactive",
    description:
      "Choose, regenerate, or customize your commit message on the fly.",
    icon: CursorClickIcon,
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            A powerful yet simple tool for your daily workflow.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-panda-bg-light/50 p-6 rounded-lg ring-1 ring-panda-border"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-panda-pink text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-white">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-panda-fg-dim">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
