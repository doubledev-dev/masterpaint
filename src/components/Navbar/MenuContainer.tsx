import { useTranslations } from "@/i18n/utils";
import type { lang } from "@/types";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface Props {
  lang: lang;
}

export default function MenuBar({ lang }: Props) {
  const t = useTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex flex-col items-center justify-center text-xl text-primary-800">
      <button type="button" aria-label="menu" onClick={() => setIsOpen(true)}>
        <Menu className="size-8" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-0 z-30 flex size-full flex-col items-end bg-black/50">
          <div className="h-full w-64 bg-white ">
            <div className="flex flex-col items-end px-4 py-3">
              <button type="button" onClick={() => setIsOpen(false)}>
                <X className="size-8" />
              </button>
            </div>
            <div className="space-y-4 px-8 py-4">
              <div>
                <a href={`/${lang}`} className="hover:font-bold">
                  {t("navbar.home")}
                </a>
              </div>
              <div>
                <a href={`/${lang}/services`} className="hover:font-bold">
                  {t("navbar.services")}
                </a>
              </div>
              <div>
                <a href={`/${lang}/projects`} className="hover:font-bold">
                  {t("navbar.projects")}
                </a>
              </div>
              <div>
                <a href={`/${lang}/about`} className="hover:font-bold">
                  {t("navbar.about")}
                </a>
              </div>
              <div>
                <a href={`/${lang}/contact`} className="hover:font-bold">
                  {t("navbar.contact")}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
