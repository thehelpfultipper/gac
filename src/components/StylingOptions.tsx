import React, { useState } from "react";

type StyleType = "mix" | "conv" | "plain" | "gitmoji";

const SyntaxHighlightedLine = ({ line }: { line: string }) => {
  // Conventional: 1. feat(auth): add session refresh...
  const convMatch = line.match(/^(1|2|3)\.\s(\w+)\(([\w-]+)\):\s(.+)/);
  if (convMatch) {
    return (
      <p>
        <span>{convMatch[1]}. </span>
        <span className="text-panda-pink">{convMatch[2]}</span>
        <span className="text-panda-lavender">({convMatch[3]})</span>
        <span>: </span>
        <span className="text-panda-cream">{convMatch[4]}</span>
      </p>
    );
  }

  // Gitmoji: 3. ✨ auth: add session refresh...
  const gitmojiMatch = line.match(/^(1|2|3)\.\s(✨|🐛|♻️)\s(\w+):\s(.+)/);
  if (gitmojiMatch) {
    return (
      <p>
        <span>
          {gitmojiMatch[1]}. {gitmojiMatch[2]}{" "}
        </span>
        <span className="text-panda-lavender">{gitmojiMatch[3]}</span>
        <span>: </span>
        <span className="text-panda-cream">{gitmojiMatch[4]}</span>
      </p>
    );
  }

  // Gitmoji Simple: 1. ✨ add session refresh
  const gitmojiSimpleMatch = line.match(/^(1|2|3)\.\s(✨|🐛|♻️)\s(.+)/);
  if (gitmojiSimpleMatch) {
    return (
      <p>
        <span>
          {gitmojiSimpleMatch[1]}. {gitmojiSimpleMatch[2]}{" "}
        </span>
        <span className="text-panda-cream">{gitmojiSimpleMatch[3]}</span>
      </p>
    );
  }

  // Plain: 2. Add session refresh...
  const plainMatch = line.match(/^(1|2|3)\.\s(.+)/);
  if (plainMatch) {
    return (
      <p>
        <span>{plainMatch[1]}. </span>
        <span className="text-panda-cream">{plainMatch[2]}</span>
      </p>
    );
  }

  return <p className="text-panda-cream">{line}</p>;
};

const styles: Record<StyleType, string[]> = {
  mix: [
    "1. feat(auth): add session refresh on 401 response",
    "2. Add session refresh on 401 response",
    "3. ✨ auth: add session refresh on 401 response",
  ],
  conv: [
    "1. feat(auth): add session refresh on 401 response",
    "2. fix(auth): handle expired tokens correctly",
    "3. refactor(auth): simplify token validation logic",
  ],
  plain: [
    "1. Add session refresh on 401 response",
    "2. Handle expired tokens correctly",
    "3. Simplify token validation logic",
  ],
  gitmoji: [
    "1. ✨ add session refresh on 401 response",
    "2. 🐛 handle expired tokens correctly",
    "3. ♻️ simplify token validation logic",
  ],
};

const StylingOptions: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<StyleType>("mix");

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Convention-Aware Styling
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            Generate commit messages in the format your team prefers.
          </p>
        </div>
        <div className="flex justify-center mb-6 border-b border-panda-border">
          {(Object.keys(styles) as StyleType[]).map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${
                activeStyle === style
                  ? "border-b-2 border-panda-pink-light text-panda-pink-light"
                  : "text-panda-fg-dim hover:text-white"
              }`}
            >
              --style {style}
            </button>
          ))}
        </div>
        <div className="bg-panda-bg-light rounded-lg">
          <pre className="p-4 text-sm font-mono overflow-x-auto">
            <code>
              {styles[activeStyle].map((line, index) => (
                <SyntaxHighlightedLine
                  key={index}
                  line={line}
                />
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default StylingOptions;
