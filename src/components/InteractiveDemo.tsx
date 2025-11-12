import React, { useState } from "react";

const commitSets = [
  [
    {
      text: "feat(auth): add session refresh on 401 response",
      len: 50,
      status: "ok",
    },
    { text: "Add session refresh on 401 response", len: 38, status: "ok" },
    {
      text: "✨ auth: implement automatic session refresh on token expiry",
      len: 73,
      status: "warn",
    },
  ],
  [
    {
      text: "fix(ui): correct button alignment on mobile view",
      len: 52,
      status: "ok",
    },
    { text: "Correct button alignment on mobile view", len: 40, status: "ok" },
    {
      text: "🐛 ui: ensure button alignment is consistent",
      len: 48,
      status: "ok",
    },
  ],
  [
    {
      text: "docs(readme): update installation instructions",
      len: 49,
      status: "ok",
    },
    {
      text: "Update installation instructions in README",
      len: 43,
      status: "ok",
    },
    {
      text: "📝 readme: clarify installation steps for users",
      len: 51,
      status: "ok",
    },
  ],
];

const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState(commitSets[0]);
  const [selected, setSelected] = useState<number | null>(null);
  const [prefix, setPrefix] = useState("");
  const [isCommitting, setIsCommitting] = useState(false);
  const [showPrefixInput, setShowPrefixInput] = useState(false);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
    setIsCommitting(true);
    setTimeout(() => {
      setIsCommitting(false);
      setSelected(null);
      handleRegenerate(); // Move to next set after "commit"
    }, 2000);
  };

  const handleRegenerate = () => {
    const nextIndex = (currentSetIndex + 1) % commitSets.length;
    setCurrentSetIndex(nextIndex);
    setMessages(commitSets[nextIndex]);
    setSelected(null);
  };

  const handleSetPrefix = () => {
    setShowPrefixInput(true);
  };

  const handlePrefixChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrefix(e.target.value);
  };

  const handlePrefixSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPrefixInput(false);
  };

  return (
    <section
      id="demo"
      className="py-20 sm:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            See it in Action
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            An interactive terminal that feels like the real thing.
          </p>
        </div>
        <div className="bg-panda-bg rounded-lg shadow-2xl ring-1 ring-panda-border overflow-hidden">
          <div className="bg-panda-bg-light px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-sm text-panda-fg-dim">bash</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="flex items-center">
              <span className="text-panda-pink-light mr-2">$</span>
              <span className="text-white">gac</span>
            </div>
            <div className="mt-4">
              {isCommitting ? (
                <div className="text-panda-green transition-opacity duration-500">
                  <p>Committing with message:</p>
                  <p className="mt-2 bg-panda-green/20 p-2 rounded">
                    {prefix}
                    {messages[selected!].text}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-white">? Choose a commit message:</p>
                  <ul className="mt-2 space-y-1">
                    {messages.map((msg, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelect(index)}
                        className="group flex items-center cursor-pointer p-1 rounded hover:bg-panda-border/50"
                      >
                        {msg.status === "ok" ? (
                          <span className="text-panda-green mr-3">✓</span>
                        ) : (
                          <span className="text-panda-lavender mr-3">⚠</span>
                        )}
                        <span className="text-white mr-2">{index + 1}.</span>
                        <span className="text-panda-fg group-hover:text-white">
                          {prefix}
                          {msg.text}
                        </span>
                        <span className="text-panda-fg-muted ml-auto pl-4">
                          ({msg.len} chars)
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 space-y-1">
                    <li
                      onClick={handleRegenerate}
                      className="group flex items-center cursor-pointer p-1 rounded hover:bg-panda-border/50"
                    >
                      <span className="text-panda-pink-light mr-3">↻</span>
                      <span className="text-panda-fg group-hover:text-white">
                        Regenerate new options{" "}
                        <span className="text-panda-fg-muted">(r)</span>
                      </span>
                    </li>
                    <li
                      onClick={handleSetPrefix}
                      className="group flex items-center cursor-pointer p-1 rounded hover:bg-panda-border/50"
                    >
                      <span className="text-panda-pink-light mr-3">✎</span>
                      <span className="text-panda-fg group-hover:text-white">
                        Set/change prefix{" "}
                        <span className="text-panda-fg-muted">(p)</span>
                      </span>
                    </li>
                    <li className="group flex items-center p-1 rounded">
                      <span className="text-panda-red mr-3">✕</span>
                      <span className="text-panda-fg">
                        Quit without committing{" "}
                        <span className="text-panda-fg-muted">(q)</span>
                      </span>
                    </li>
                  </ul>
                  {showPrefixInput && (
                    <form
                      onSubmit={handlePrefixSubmit}
                      className="mt-4 flex items-center"
                    >
                      <label
                        htmlFor="prefix-input"
                        className="text-white mr-2"
                      >
                        Enter prefix:
                      </label>
                      <input
                        id="prefix-input"
                        type="text"
                        value={prefix}
                        onChange={handlePrefixChange}
                        className="bg-panda-border text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-panda-pink flex-grow"
                        autoFocus
                        onBlur={() => setShowPrefixInput(false)}
                      />
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
