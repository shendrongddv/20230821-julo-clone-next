"use client";

import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { DataBrandLogo } from "@/config/dummy";

const SNewsMedia = () => {
  return (
    <section id="partners" className="bg-slate-100 px-4 py-16">
      <div className="container flex flex-col gap-8 md:px-32">
        {/* Row */}
        <div className="space-y-2 md:w-1/2">
          <h2 className="h2 text-secondary-foreground">Publikasi Media</h2>
          <p className="large">
            Publikasi JULO meliputi berbagai media terbaik di Indonesia dan
            mancanegara.
          </p>
        </div>

        {/* Row */}
        <ul className="flex flex-wrap gap-2 md:justify-evenly md:gap-4">
          {DataBrandLogo?.map((item) => (
            <SingleBrand key={item.id} name={item.name} media={item.media} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SNewsMedia;

type SingleBrandProps = {
  name: string;
  media: string;
};

export const SingleBrand = ({ name, media }: SingleBrandProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <li className="flex-shrink-0 rounded-xl bg-background p-3 md:p-4">
            <Image
              src={`/brand/${media}`}
              alt={name}
              width={200}
              height={100}
              className="h-6 w-auto md:h-9"
            />
          </li>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
