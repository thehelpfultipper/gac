import React, { useState } from "react";
import CodeBlock from "./CodeBlock";

type ConfigType = "gacrc" | "packagejson";

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
};

const fileNames = {
  gacrc: ".gacrc",
  packagejson: "package.json",
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
            language="json"
            code={configExamples[activeConfig]}
          />
        </div>
      </div>
    </section>
  );
};

export default Configuration;
