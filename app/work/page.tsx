"use client";
import PageLayout from "@/components/PageLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import pOne from "@/images/travent.png";
import pTwo from "@/images/oec.png";
import pThree from "@/images/GS.png";
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
      "Booking Core is a Booking System based on Laravel, designed for a travel website, Marketplace, Travel Agency, Tour Operator, Room Bnb, Villa Rental, Resort Rental, Make Travel website. With 6+ years working on travel products we confident to bring to you best product for your travel site with optimized UX/UI, friendly on mobile on the search engine.",
    stack: ["Laravel", "React js", "tailwind css", "bootstrap", "MySQL"],
    image: pOne,
    liveUrl: "https://travent.ae",
    githubUrl: "https://github.com/AssadAldin",
  },
  {
    id: "02",
    title: "Ohayla Educational Classes",
    category: "Full Stack",
    description:
      "We aim at providing complete learning to help you accelerate the practice of gynaecology and obestetric through research, training, education and maintaining the highest level of expertise and ethical standards.",
    stack: ["Laravel", "bootstrap", "MySQL", "javascript"],
    image: pTwo,
    liveUrl: "https://oec.sd",
    githubUrl: "https://github.com/AssadAldin",
  },
  {
    id: "03",
    title: "Genius Solution",
    category: "Full Stack",
    description:
      "Booking Core is a Booking System based on Laravel, designed for a travel website, Marketplace, Travel Agency, Tour Operator, Room Bnb, Villa Rental, Resort Rental, Make Travel website. With 6+ years working on travel products we confident to bring to you best product for your travel site with optimized UX/UI, friendly on mobile on the search engine.",
    stack: ["Next js", "tailwind css", "PostgreSQL"],
    image: pThree,
    liveUrl: "https://gs.sd",
    githubUrl: "https://github.com/AssadAldin",
  },
];

const WorkPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
          onSelect={() => {
            const index = 0;
            if (typeof index === "number") {
              handleSlideChange(index);
            }
          }}
        >
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
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border hover:bg-lightSky/20 border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Link
                                      href={project?.liveUrl}
                                      target="_blank"
                                    >
                                      <ArrowUpRight />{" "}
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Link>
                                  </Button>
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
                        <div className="relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden">
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
          <div className="absolute right-10 -bottom-8">
            <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
            <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect" />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
