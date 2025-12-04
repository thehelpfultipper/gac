import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-panda-border py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-white hover:text-panda-pink-light focus:outline-none cursor-pointer"
      >
        <span>{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4 text-panda-fg-dim prose prose-invert max-w-none">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Troubleshooting
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            Common questions and solutions.
          </p>
        </div>
        <div className="space-y-4">
          <FAQItem question="Ollama unavailable, using heuristic fallback">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Ensure Ollama is running with{" "}
                <code className="bg-panda-bg-light px-1 rounded">
                  ollama serve
                </code>
                .
              </li>
              <li>
                Check your model name with{" "}
                <code className="bg-panda-bg-light px-1 rounded">
                  ollama list
                </code>
                .
              </li>
              <li>
                Make sure port 11434 is not being used by another application.
              </li>
            </ul>
          </FAQItem>
          <FAQItem question="When should I use .gacignore?">
            <p>
              <code className="bg-panda-bg-light px-1 rounded">gac</code> only
              analyzes <strong>staged</strong> files. If a file is in{" "}
              <code className="bg-panda-bg-light px-1 rounded">.gitignore</code>
              , it cannot be staged, so{" "}
              <code className="bg-panda-bg-light px-1 rounded">gac</code> won't
              see it anyway.
            </p>
            <p className="mt-2">
              You only need{" "}
              <code className="bg-panda-bg-light px-1 rounded">.gacignore</code>{" "}
              for files that <strong>are tracked by Git</strong> (and currently
              staged) but contain "noise" you don't want the AI to process, such
              as large lockfiles or auto-generated source code.
            </p>
          </FAQItem>
          <FAQItem question="Messages are too long">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Use the{" "}
                <code className="bg-panda-bg-light px-1 rounded">
                  --max-len 50
                </code>{" "}
                flag for shorter messages.
              </li>
              <li>
                Use the 'regenerate' option until you get a suitable message.
              </li>
            </ul>
          </FAQItem>
          <FAQItem question="Generation is slow">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Switch to a smaller, faster model like{" "}
                <code className="bg-panda-bg-light px-1 rounded">
                  --model llama3.2:3b
                </code>
                .
              </li>
              <li>
                Keep your model loaded in memory with{" "}
                <code className="bg-panda-bg-light px-1 rounded">
                  export OLLAMA_KEEP_ALIVE=1h
                </code>
                .
              </li>
              <li>
                For instant results, use the heuristic engine:{" "}
                <code className="bg-panda-bg-light px-1 rounded">
                  --engine none
                </code>
                .
              </li>
            </ul>
          </FAQItem>
          <FAQItem question="How do I handle API keys safely?">
            <p>
              It is strongly recommended to use environment variables for API
              keys (
              <code className="bg-panda-bg-light px-1 rounded">
                OPENAI_API_KEY
              </code>
              ,{" "}
              <code className="bg-panda-bg-light px-1 rounded">
                GEMINI_API_KEY
              </code>
              ). If you must store them in a{" "}
              <code className="bg-panda-bg-light px-1 rounded">.gacrc</code>{" "}
              file, ensure that file is added to your{" "}
              <code className="bg-panda-bg-light px-1 rounded">.gitignore</code>{" "}
              to prevent accidentally committing secrets.
            </p>
          </FAQItem>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
