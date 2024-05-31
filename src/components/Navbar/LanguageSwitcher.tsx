import type { lang } from "@/types";
import { useMemo } from "react";

const LanguageSwitcher = ({
  lang,
  currentPath,
}: {
  lang: lang;
  currentPath: string;
}) => {
  const isChecked = useMemo(() => {
    return lang === "en";
  }, [lang]);

  return (
    <a href={lang === "en" ? `/th${currentPath}` : `/en${currentPath}`}>
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <div className="flex h-8 items-center justify-center rounded-md bg-transparent shadow-card">
          <span
            className={`flex size-6 items-center justify-center rounded text-sm ${
              !isChecked ? "bg-primary-500 text-white" : "text-black"
            }`}
          >
            <p>TH</p>
          </span>
          <span
            className={`flex size-6 items-center justify-center rounded text-sm ${
              isChecked ? "bg-primary-500 text-white" : "text-black"
            }`}
          >
            <p>EN</p>
          </span>
        </div>
      </label>
    </a>
  );
};

export default LanguageSwitcher;
