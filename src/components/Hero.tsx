import React from "react";
import CodeBlock from "./CodeBlock";

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 sm:py-24 lg:py-32">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
        gac - Git Auto Commit
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-panda-fg-dim">
        Smart, succinct Git commit messages -{" "}
        <strong>free & local-first</strong>
      </p>
      <div className="mt-8 flex justify-center">
        <div className="max-w-md w-full text-center">
          <CodeBlock
            language="bash"
            code="npx @thehelpfultipper/gac"
          />
          <p className="mt-2 text-sm text-panda-fg-muted">
            Try it now without installing
          </p>
          <p className="mt-4 text-sm text-panda-fg-dim">
            Or install globally via{" "}
            <a
              href="https://www.npmjs.com/package/@thehelpfultipper/gac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-panda-pink-light font-medium underline hover:text-white transition-colors"
            >
              npm
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
