import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <title>OSSU Computer Science</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    </>
  ),
  banner: {
    key: "1.0-version",
    text: (
      <div className="py-4">
        To see the latest version of the curriculum, please visit the official
        &nbsp;
        <a
          className="underline font-bold"
          href="https://github.com/ossu/computer-science"
        >
          <strong>OSSU repository.</strong>
        </a>
      </div>
    ),
  },
  logo: <strong>OSSU Computer Science</strong>,
  project: {
    link: "https://github.com/ossu/computer-science",
  },
  chat: {
    link: "https://discord.gg/wuytwK5s9h",
  },
  docsRepositoryBase: "https://github.com/Orliland/ossu-computer-science",
  footer: {
    text: "🎓 Path to a free self-taught education in Computer Science!",
  },
};

export default config;
