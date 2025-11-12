import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-panda-bg border-t border-panda-border">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-panda-fg-muted">
        <p>
          &copy; {currentYear} gac by{" "}
          <a
            className="underline font-bold text-panda-fg-dim"
            href="https://thehelpfultipper.com/kleamerkuri/"
            target="_blank"
          >
            Klea Merkuri
          </a>{" "}
          for{" "}
          <a
            className="underline font-bold text-panda-fg-dim"
            href="https://thehelpfultipper.com/"
            target="_blank"
          >
            THT
          </a>
          . All rights reserved. Licensed under MIT.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
