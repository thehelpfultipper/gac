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
      <div className="mt-8 mx-auto max-w-xl bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-left sm:text-center">
        <h3 className="text-yellow-500 font-bold flex items-center sm:justify-center text-sm uppercase tracking-wide mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Update Required for Notifications
        </h3>
        <p className="text-sm text-panda-fg-dim">
            This version introduces automatic update checks. If you installed previously, you <strong>must</strong> reinstall to receive future notifications.
        </p>
      </div>
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
