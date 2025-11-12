import React from "react";
import CodeBlock from "./CodeBlock";

const HowItWorks: React.FC = () => {
  return (
    <section
      id="usage"
      className="py-20 sm:py-24 bg-panda-bg/70 rounded-xl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get Started in Seconds
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            A simple, intuitive workflow.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-panda-pink-light mb-4">
              1.
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Stage Your Changes
            </h3>
            <p className="text-panda-fg-dim mb-4">
              The usual first step in your commit process.
            </p>
            <CodeBlock
              code="git add ."
              language="bash"
            />
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-panda-pink-light mb-4">
              2.
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Run gac</h3>
            <p className="text-panda-fg-dim mb-4">
              Let AI do the hard work of writing a great message.
            </p>
            <CodeBlock
              code="gac"
              language="bash"
            />
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-panda-pink-light mb-4">
              3.
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Choose & Commit
            </h3>
            <p className="text-panda-fg-dim mb-4">
              Pick the best option from the interactive menu.
            </p>
            <div className="bg-panda-bg-light rounded-lg p-4 text-left font-mono text-sm text-panda-fg">
              <p>
                1. <span className="text-panda-pink">feat</span>
                <span className="text-panda-lavender">(auth)</span>:{" "}
                <span className="text-panda-cream">add session refresh...</span>
              </p>
              <p>
                2.{" "}
                <span className="text-panda-cream">
                  Add session refresh on 401...
                </span>
              </p>
              <p>
                3. ✨ <span className="text-panda-lavender">auth</span>:{" "}
                <span className="text-panda-cream">add session refresh...</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
