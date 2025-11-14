import React, { useState, useEffect, useRef } from "react";

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

type View = "select" | "edit" | "prefix" | "committing";

const InteractiveDemo: React.FC = () => {
  const [view, setView] = useState<View>("select");
  const [messages, setMessages] = useState(commitSets[0]);
  const [prefix, setPrefix] = useState("");
  const [prefixInput, setPrefixInput] = useState("");
  const [commitMessage, setCommitMessage] = useState("");
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [editingMessage, setEditingMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if ((view === "edit" || view === "prefix") && inputRef.current) {
      inputRef.current.focus();
    }
  }, [view]);

  const resetToSelect = () => {
    setHoverIndex(0);
    setView("select");
  };

  const handleCommit = (message: string) => {
    if (!message.trim()) {
      resetToSelect();
      return;
    }
    setCommitMessage(message);
    setView("committing");

    setTimeout(() => {
      const nextIndex = (currentSetIndex + 1) % commitSets.length;
      setCurrentSetIndex(nextIndex);
      setMessages(commitSets[nextIndex]);
      setCommitMessage("");
      resetToSelect();
    }, 2000);
  };

  const handleAction = (index: number) => {
    setHoverIndex(index); // Set active selection
    if (index < messages.length) {
      // A commit message is selected
      setEditingMessage(prefix + messages[index].text);
      setView("edit");
    } else if (index === messages.length) {
      // Regenerate
      const nextIndex = (currentSetIndex + 1) % commitSets.length;
      setCurrentSetIndex(nextIndex);
      setMessages(commitSets[nextIndex]);
      resetToSelect();
    } else if (index === messages.length + 1) {
      // Set Prefix
      setPrefixInput(prefix);
      setView("prefix");
    } else if (index === messages.length + 2) {
      // Quit
      // In a real app this would exit, here we just cycle to next example.
      const nextIndex = (currentSetIndex + 1) % commitSets.length;
      setCurrentSetIndex(nextIndex);
      setMessages(commitSets[nextIndex]);
      setPrefix(""); // Reset prefix on "quit"
      resetToSelect();
    }
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommit(editingMessage);
  };

  const handleCancelEdit = () => {
    resetToSelect();
  };

  const handlePrefixSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newPrefix = prefixInput.trim();
    if (newPrefix && !newPrefix.endsWith(" ") && !newPrefix.endsWith(":")) {
      newPrefix += ": ";
    }
    setPrefix(newPrefix);
    resetToSelect();
  };

  const renderContent = () => {
    if (view === "committing") {
      return (
        <div className="text-panda-green transition-opacity duration-500">
          <p>Committing with message:</p>
          <p className="mt-2 bg-panda-green/20 p-2 rounded">{commitMessage}</p>
        </div>
      );
    }

    if (view === "edit") {
      return (
        <form onSubmit={handleEditSubmit}>
          <p className="text-white mb-2">
            <span className="text-panda-pink-light">?</span> Edit commit
            message:
            <span className="text-panda-fg-muted">
              {" "}
              (Enter to commit, Ctrl+C to cancel)
            </span>
          </p>
          <div className="flex items-center">
            <span className="text-panda-pink-light mr-2">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={editingMessage}
              onChange={(e) => setEditingMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.ctrlKey && e.key.toLowerCase() === "c") {
                  e.preventDefault();
                  handleCancelEdit();
                }
              }}
              className="bg-transparent text-white focus:outline-none flex-grow"
            />
          </div>
        </form>
      );
    }

    if (view === "prefix") {
      return (
        <form onSubmit={handlePrefixSubmit}>
          <p className="text-white mb-2">
            <span className="text-panda-pink-light">?</span> Enter prefix (leave
            empty to clear):
            <span className="text-panda-fg-muted">
              {" "}
              (Enter to set, Ctrl+C to cancel)
            </span>
          </p>
          <div className="flex items-center">
            <span className="text-panda-pink-light mr-2">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={prefixInput}
              onChange={(e) => setPrefixInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.ctrlKey && e.key.toLowerCase() === "c") {
                  e.preventDefault();
                  resetToSelect();
                }
              }}
              className="bg-transparent text-white focus:outline-none flex-grow"
            />
          </div>
        </form>
      );
    }

    const options = [
      ...messages.map((msg, index) => ({
        label: `${msg.status === "ok" ? "✓" : "⚠"} ${index + 1}. ${prefix}${
          msg.text
        }`,
        hint: `(${(prefix + msg.text).length} chars)`,
      })),
      { label: "↻ Regenerate new options", hint: "(r)" },
      { label: "✎ Set/change prefix", hint: "(p)" },
      { label: "✕ Quit without committing", hint: "(q)" },
    ];

    return (
      <div>
        <p className="text-white">
          <span className="text-panda-pink-light">◇</span>{" "}
          <span className="font-bold">Choose a commit message:</span>
        </p>
        <ul
          className="mt-2"
          onMouseLeave={() => setHoverIndex(hoverIndex)}
        >
          {options.map((opt, index) => {
            const isSelected = hoverIndex === index;
            const isMessage = index < messages.length;
            const isRegen = index === messages.length;
            const isPrefix = index === messages.length + 1;
            const isQuit = index === messages.length + 2;

            let colorClass = isSelected
              ? "text-panda-pink-light"
              : "text-panda-fg-dim";
            if (isMessage)
              colorClass = isSelected ? "text-white" : "text-panda-fg";
            if (isRegen)
              colorClass = isSelected
                ? "text-panda-pink-light"
                : "text-panda-fg-dim";
            if (isPrefix)
              colorClass = isSelected
                ? "text-panda-purple-light"
                : "text-panda-fg-dim";
            if (isQuit)
              colorClass = isSelected ? "text-panda-red" : "text-panda-fg-dim";

            return (
              <li
                key={index}
                onClick={() => handleAction(index)}
                onMouseEnter={() => setHoverIndex(index)}
                className="flex items-center cursor-pointer p-0.5 rounded"
              >
                <span
                  className={`w-4 mr-2 text-center ${
                    isSelected ? "text-panda-pink-light" : ""
                  }`}
                >
                  {isSelected ? "❯" : " "}
                </span>
                <span
                  className={`${colorClass} transition-colors duration-100`}
                >
                  {opt.label}
                </span>
                <span className="text-panda-fg-muted ml-auto pl-4">
                  {opt.hint}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-panda-fg-muted">
          Use ↑/↓, Enter, or shortcuts (1-3, r, p, q)
        </p>
      </div>
    );
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
          <div className="p-6 font-mono text-sm min-h-[320px]">
            <div className="flex items-center">
              <span className="text-panda-pink-light mr-2">$</span>
              <span className="text-white">gac</span>
            </div>
            <div className="mt-4">{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
