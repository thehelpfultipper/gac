import React from "react";
import CodeBlock from "./CodeBlock";

const ChangelogSection: React.FC = () => {
  return (
    <section
      id="changelog"
      className="py-20 sm:py-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Changelog & Releases
          </h2>
          <p className="mt-4 text-lg text-panda-fg-dim">
            Automate your release process from commit to tag.
          </p>
        </div>
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Manual Changelog Generation
            </h3>
            <p className="text-panda-fg-dim mb-4">
              Use{" "}
              <code className="bg-panda-bg-light text-panda-pink-light px-1 py-0.5 rounded text-sm">
                --changelog
              </code>{" "}
              to generate or update{" "}
              <code className="bg-panda-bg-light text-panda-pink-light px-1 py-0.5 rounded text-sm">
                CHANGELOG.md
              </code>{" "}
              without creating a new tag. Perfect for previews or preparing
              release notes.
            </p>
            <CodeBlock
              language="bash"
              code="# Preview changelog entries since last tag
gac --changelog --dry-run"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Automated Releases
            </h3>
            <p className="text-panda-fg-dim mb-4">
              The{" "}
              <code className="bg-panda-bg-light text-panda-pink-light px-1 py-0.5 rounded text-sm">
                --release
              </code>{" "}
              flag is your one-step solution. It determines the next semver
              version, updates the changelog, and creates an annotated Git tag.
            </p>
            <CodeBlock
              language="bash"
              code="# Compute next version, update changelog, and create tag
gac --release"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Fine-Grained Control
            </h3>
            <p className="text-panda-fg-dim mb-4">
              Take full control of your releases with explicit versioning and
              package file updates.
            </p>
            <CodeBlock
              language="bash"
              code="# Explicitly bump minor version and update package.json
gac --release --bump minor --update-pkg

# Set the exact version for the release
gac --release --release-as v2.0.0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangelogSection;
