import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <strong>OSSU Computer Science</strong>,
  head: (
    <>
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    </>
  ),
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
