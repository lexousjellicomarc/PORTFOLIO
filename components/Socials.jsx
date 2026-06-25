import Link from "next/link";

import { socialData } from "../data/socials";

const isExternalUrl = (href) => /^https?:\/\//i.test(href);

const Socials = () => {
  return (
    <nav aria-label="Social links">
      <ul className="flex items-center gap-x-5 text-lg">
        {socialData.map((social) => {
          const external = isExternalUrl(social.link);

          return (
            <li key={social.name}>
              <Link
                title={social.name}
                href={social.link}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
                aria-label={social.name}
                className={`${
                  social.name === "GitHub"
                    ? "bg-accent rounded-full p-[5px] hover:text-white"
                    : "hover:text-accent"
                } inline-flex transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
              >
                <social.Icon aria-hidden="true" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Socials;
