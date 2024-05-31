import { mappingTags } from "@/lib/utils";
import type { lang } from "@/types";
import type { FilterData, Tags } from "@/types/Filters";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  data: FilterData;
  setState: (e: string) => void;
  zIndex?: number;
  lang: lang;
}

function Filter({ data, setState, zIndex, lang }: Props) {
  const [text, setText] = useState<string>(data.title);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-start text-primary-800">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className={
          "flex w-[312px] items-center justify-between space-x-32 border-b-2 bg-secondary-100 px-4 py-1 " +
          (openMenu ? "  border-primary-800" : " border-transparent")
        }
      >
        <h3 className="text-left text-base font-semibold">
          {mappingTags(text as Tags, lang)}
        </h3>
        <ChevronDown
          size={20}
          className={openMenu ? "rotate-180 duration-300" : "duration-300"}
        />
      </button>
      {openMenu && (
        <div className="relative inline-block w-[312px] space-x-4">
          {
            <div
              className={`absolute block w-full bg-white`}
              style={{ zIndex: `${zIndex}` }}
            >
              <ul className="flex flex-col ">
                {data.options.map((item, index) => {
                  return item.extends ? (
                    <ul className="flex w-full flex-col">
                      <button
                        key={`${data.title}-${index}`}
                        onClick={() => {
                          console.log(item.option + "1");
                          setOpenMenu(!openMenu);
                          setText(item.option);
                          setState(item.option);
                        }}
                        className={`list-disc px-8 py-2 text-start hover:bg-primary-600 hover:text-white`}
                      >
                        <li>{mappingTags(item.option as Tags, lang)}</li>
                      </button>
                      <ul className="grid grid-cols-1">
                        {item.extends.map((extend, index) => {
                          return (
                            <button
                              key={index}
                              className="bg-white p-2 text-start hover:bg-primary-600 hover:text-white"
                              onClick={() => {
                                console.log(item.option + "2");
                                setOpenMenu(!openMenu);
                                setText(extend);
                                setState(extend);
                              }}
                            >
                              <li className="ml-16 list-[circle]">
                                {mappingTags(extend as Tags, lang)}
                              </li>
                            </button>
                          );
                        })}
                      </ul>
                    </ul>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        console.log(item.option + "3");
                        setOpenMenu(!openMenu);
                        setText(item.option);
                        setState(item.option);
                      }}
                      className={`list-disc px-8 py-2 text-start hover:bg-primary-600 hover:text-white`}
                    >
                      <li>{mappingTags(item.option as Tags, lang)}</li>
                    </button>
                  );
                })}
              </ul>
            </div>
          }
        </div>
      )}
    </div>
  );
}

export default Filter;
