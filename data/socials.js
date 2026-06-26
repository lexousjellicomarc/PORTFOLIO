import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

import { siteConfig } from "./siteConfig";

export const socialData = [
  {
    name: "GitHub",
    link: siteConfig.github,
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: siteConfig.linkedin,
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    link: `mailto:${siteConfig.email}`,
    Icon: RiMailLine,
  },
];
