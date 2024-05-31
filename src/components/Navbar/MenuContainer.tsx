import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Menu } from "lucide-react";

export default function MenuBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="px-0">
          <Menu />
        </MenubarTrigger>
        <MenubarContent className="text-primary-800">
          <a href="/">
            <MenubarItem>Home</MenubarItem>
          </a>
          <a href="/services">
            <MenubarItem>Services</MenubarItem>
          </a>
          <a href="/projects">
            <MenubarItem>Projects</MenubarItem>
          </a>
          <a href="/about">
            <MenubarItem>About Us</MenubarItem>
          </a>
          <a href="/contact">
            <MenubarItem>Contact</MenubarItem>
          </a>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
