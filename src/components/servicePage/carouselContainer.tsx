import img1 from "@/assets/service/carousel/img1.svg";
import img10 from "@/assets/service/carousel/img10.svg";
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
} from "@/components/ui/carousel";

const slides = [
  {
    img: img1,
    desc: "การไฟฟ้าส่วนภูมิภาค(สำนักงานใหญ่)",
    style: "basis-1/4 bg-green-300",
  },
  {
    img: img2,
    desc: "บริษัท ลิกมัน ไลท์ติ้ง จำกัด",
    style: "basis-1/4 bg-blue-300",
  },
  {
    img: img3,
    desc: "บริษัท ซูซูโย่ จำกัด",
    style: "basis-1/4 bg-red-300",
  },
  {
    img: img4,
    desc: "บริษัทคีพอินทัช จำกัด",
    style: "basis-1/4 bg-purple-300",
  },
  {
    img: img5,
    desc: "บริษัท สโตนวัน จำกัด",
    style: "basis-1/4 bg-yellow-300",
  },
  {
    img: img6,
    desc: "บริษัท อุตสาหกรรมทำเครื่องแก้วไทยจำกัด (มหาชน)",
    style: "basis-1/4 bg-green-300",
  },
  {
    img: img7,
    desc: "บริษัท เกิดปัญญา จำกัด",
    style: "basis-1/4 bg-blue-300",
  },
  {
    img: img8,
    desc: "Marut Residence",
    style: "basis-1/4 bg-purple-300",
  },
  {
    img: img9,
    desc: "บ้านเปรมสุข",
    style: "basis-1/4 bg-red-300",
  },
  {
    img: img10,
    desc: " บริษัท เทิร์นคีย์ คอมมูนิเคชั่น เซอร์วิส จำกัด",
    style: "basis-1/4 bg-yellow-300",
  },
];

export default function carousel() {
  return (
    <Carousel className="w-[1000px]">
      <CarouselContent className="bg-red-200">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className={slide.style}>
            <div className="relative z-0 inline-block size-[217px]">
              <img src={slide.img.src} alt={slide.desc} className="z-0 block" />
              <p className="absolute left-7 top-7 z-10 inline-block text-white">
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
