"use client";
import PageLayout from "@/components/PageLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import pOne from "@/images/travent.png";
import pTwo from "@/images/oec.png";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "01",
    title: "Travent",
    category: "Full Stack",
    description:
      "Travent is an innovative platform designed for booking chalets and holiday houses, offering users a seamless and enjoyable experience. Built with a robust tech stack, it combines the power of React for a dynamic and responsive frontend with the reliability of Laravel for a secure and efficient backend.",
    stack: ["Laravel", "React js", "tailwind css", "MySQL"],
    image: pOne,
    liveUrl: "https://travent.me",
    githubUrl: "https://github.com/AssadAldin",
  },
  {
    id: "02",
    title: "Ohayla Educational Classes",
    category: "Full Stack",
    description:
      "OEC (Ohayla Educational Classes) is a dedicated educational platform designed to empower healthcare professionals, particularly those specializing in gynaecology and obstetrics. The primary goal of OEC is to provide a comprehensive learning experience that fosters growth, research, and the highest standards of expertise in the field.",
    stack: ["Laravel", "bootstrap", "MySQL", "javascript"],
    image: pTwo,
    liveUrl: "https://oec.sd",
    githubUrl: "https://github.com/AssadAldin",
  },
];

const WorkPage = () => {
  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {projects?.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      {/* description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
                        <div className="space-y-3 md:space-y-6 mt-4 md:mt-0">
                          <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project.id}
                          </h2>
                          <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                            {project?.category} project
                          </h3>
                          <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                            {project?.description}
                          </p>
                          <ul className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-base text-lightSky/80"
                              >
                                {item}
                                {index !== project?.stack?.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className="bg-gray-700" />
                          <div className="flex items-center space-x-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link href={project?.liveUrl} target="_blank">
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="bg-lightSky/5 text-white/80 border hover:bg-lightSky/20 border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                    >
                                      <ArrowUpRight />{" "}
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Button>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold">
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border hover:bg-lightSky/20 border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Link
                                      href={project?.githubUrl}
                                      target="_blank"
                                    >
                                      <GithubIcon />{" "}
                                      <span className="sr-only">
                                        View GitHub Repository
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold">
                                  <p>View GitHub Repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      {/* image */}
                      <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-96 bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project?.image}
                            fill
                            alt={project?.title}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 mx-5 -bottom-8">
            <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
