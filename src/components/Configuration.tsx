import React, { useState } from "react";
import CodeBlock from "./CodeBlock";

type ConfigType = "gacrc" | "packagejson" | "gacignore";

const configExamples = {
  gacrc: `{
  "engine": "ollama",
  "model": "llama3.2:3b",
  "style": "conv",
  "maxLen": 72,
  "prefix": ""
}`,
  packagejson: `{
  "name": "my-project",
  "version": "1.0.0",
  "gac": {
    "style": "conv",
    "model": "phi3:3.8b",
    "engine": "ollama"
  }
}`,
  gacignore: `# Lock files (tracked, but huge and noisy for AI)
package-lock.json
yarn.lock
pnpm-lock.yaml

# Auto-generated source files
src/gql/types.ts
src/aws-exports.js

# Minified assets (if you commit them)
public/js/*.min.js`,
};

const fileNames = {
  gacrc: ".gacrc",
  packagejson: "package.json",
  gacignore: ".gacignore",
};

const Configuration: React.FC = () => {
  const [activeConfig, setActiveConfig] = useState<ConfigType>("gacrc");

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Flexible Configuration
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            Configure once, then forget about it. Settings are loaded from your
            project.
          </p>
          <div className="mt-4 inline-flex items-center rounded-md bg-panda-bg-light px-3 py-2 text-sm font-medium text-panda-pink-light ring-1 ring-inset ring-panda-pink/20">
            💡 Tip: Run{" "}
            <code className="mx-1 font-mono text-white">gac init</code>{" "}
            to generate the .gacrc file interactively!
          </div>
        </div>
        <div className="flex justify-center mb-2 border-b border-panda-border">
          {(Object.keys(configExamples) as ConfigType[]).map((config) => (
            <button
              key={config}
              onClick={() => setActiveConfig(config)}
              className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${
                activeConfig === config
                  ? "border-b-2 border-panda-pink-light text-panda-pink-light"
                  : "text-panda-fg-dim hover:text-white"
              }`}
            >
              {fileNames[config]}
            </button>
          ))}
        </div>
        <div className="relative">
          <p className="absolute top-2 right-4 text-xs text-panda-fg-muted">
            {fileNames[activeConfig]}
          </p>
          <CodeBlock
            language={activeConfig === "gacignore" ? "text" : "json"}
            code={configExamples[activeConfig]}
          />
        </div>
      </div>
    </section>
  );
};

export default Configuration;
