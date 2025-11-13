import React from "react";
import { ExternalLink } from "./icons/ExternalLink";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-panda-bg/75 backdrop-blur-lg border-b border-panda-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-white"
            >
              gac
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#features"
                className="text-panda-fg hover:bg-panda-bg-light hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-panda-fg hover:bg-panda-bg-light hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Demo
              </a>
              <a
                href="#usage"
                className="text-panda-fg hover:bg-panda-bg-light hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Usage
              </a>
              <a
                href="#changelog"
                className="text-panda-fg hover:bg-panda-bg-light hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Changelog
              </a>
              <a
                href="https://www.npmjs.com/package/@thehelpfultipper/gac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-panda-fg hover:bg-panda-bg-light hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                NPM
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
