import { useTranslations } from "@/i18n/utils";
import type { lang } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import img1 from "@/assets/service/carousel/img1.svg";
import img2 from "@/assets/service/carousel/img2.svg";
import img3 from "@/assets/service/carousel/img3.svg";
import img4 from "@/assets/service/carousel/img4.svg";
import img5 from "@/assets/service/carousel/img5.svg";
import img6 from "@/assets/service/carousel/img6.svg";
import img7 from "@/assets/service/carousel/img7.svg";
import img8 from "@/assets/service/carousel/img8.svg";
import img9 from "@/assets/service/carousel/img9.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/customCarousel";

interface Props {
  lang: lang;
}

export default function carousel({ lang }: Props) {
  const t = useTranslations(lang);
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const slides = [
    {
      img: img1,
      desc: t("service.carousel.slide1"),
    },
    {
      img: img2,
      desc: t("service.carousel.slide2"),
    },
    {
      img: img3,
      desc: t("service.carousel.slide3"),
    },
    {
      img: img4,
      desc: t("service.carousel.slide4"),
    },
    {
      img: img5,
      desc: t("service.carousel.slide5"),
    },
    {
      img: img6,
      desc: t("service.carousel.slide6"),
    },
    {
      img: img7,
      desc: t("service.carousel.slide7"),
    },
    {
      img: img8,
      desc: t("service.carousel.slide8"),
    },
    {
      img: img9,
      desc: t("service.carousel.slide9"),
    },
  ];

  return (
    <Carousel plugins={[plugin.current]} className="hidden lg:block">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <div className="relative z-0 inline-block size-[217px] ">
              <img src={slide.img.src} alt={slide.desc} className="z-0 block" />
              <p className="absolute left-0 top-[10%] z-10 mx-[10%] inline-block text-white">
                {slide.desc}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
