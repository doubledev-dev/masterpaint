import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Menu } from "lucide-react";

interface Props {
  lang: string;
}

export default function MenuBar({ lang }: Props) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Menu />
        </MenubarTrigger>
        <MenubarContent className="text-primary-800">
          <a href="/">
            <MenubarItem>{lang === "en" ? "Home" : "หน้าแรก"}</MenubarItem>
          </a>
          <a href="/services">
            <MenubarItem>{lang === "en" ? "Services" : "บริการ"}</MenubarItem>
          </a>
          <a href="/projects">
            <MenubarItem>{lang === "en" ? "Projects" : "โปรเจค"}</MenubarItem>
          </a>
          <a href="/about">
            <MenubarItem>{lang === "en" ? "About Us" : "เกี่ยวกับเรา"}</MenubarItem>
          </a>
          <a href="/contact">
            <MenubarItem>{lang === "en" ? "Contact" : "ติดต่อเรา"}</MenubarItem>
          </a>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
