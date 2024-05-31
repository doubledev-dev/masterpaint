import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "@/i18n/utils";
import type { lang } from "@/types";
import type { ImageMetadata } from "astro";

export default function carousel({
  lang,
  images,
}: {
  lang: lang;
  images: ImageMetadata[];
}) {
  const t = useTranslations(lang);
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="relative">
      <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          {images.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative z-0 bg-black">
                <img
                  src={slide.src}
                  alt={`HeroImage-${index}`}
                  className="z-0 flex h-[50vh] min-w-full items-end object-cover opacity-80 lg:h-[70vh]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="ghost" size="ghost" />
        <CarouselNext variant="ghost" size="ghost" />
      </Carousel>
      <div className="absolute bottom-0 z-10 size-full bg-black opacity-40"></div>
      <div className="absolute bottom-0 z-20 p-[10%]">
        <h1 className="mb-6 font-Inter text-5xl text-white">
          {t("hero.title")}
        </h1>
        <p className="max-w-80 text-sm text-white">{t("hero.description")}</p>

        <a href={`/contact`}>
          <button className="mt-12 items-center rounded-3xl bg-white p-2 px-4 text-center text-base text-accent-dark-blue transition-colors duration-300 ease-in-out hover:bg-accent-dark-blue hover:text-white">
            {t("hero.contact")}
          </button>
        </a>
      </div>
    </div>
  );
}
