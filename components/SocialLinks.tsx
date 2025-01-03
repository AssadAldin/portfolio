import { Github, Linkedin, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socialData = [
  { title: "GitHub", icon: <Github />, href: "https://github.com/AssadAldin" },
  {
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/assadaldin-osman/",
  },
  { title: "x.com", icon: <X />, href: "https://x.com/Assadaldin96951" },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-3">
        {socialData?.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger>
              <Link href={item?.href}>
                <div className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect">
                  <span>{item?.icon}</span>
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-hoverColor text-black font-semibold">
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
