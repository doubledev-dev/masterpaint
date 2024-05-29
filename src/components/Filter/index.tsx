import type { FilterData } from "@/types/Filters";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  data: FilterData;
  setState: (e: string) => void;
  zIndex?: number;
}

function Filter({ data, setState, zIndex }: Props) {
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
        <h3 className="text-base font-semibold">{text}</h3>
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
                          console.log(item.option);
                          setOpenMenu(!openMenu);
                          setText(item.option);
                          setState(item.option);
                        }}
                        className={`list-disc px-8 py-2 text-start hover:bg-primary-600 hover:text-white`}
                      >
                        <li>{item.option}</li>
                      </button>
                      <ul className="grid grid-cols-1">
                        {item.extends.map((extend, index) => {
                          return (
                            <button
                              key={index}
                              className="bg-white p-2 text-start hover:bg-primary-600 hover:text-white"
                              onClick={() => {
                                setOpenMenu(!openMenu);
                                setText("ทา" + extend);
                                setState("ทา" + extend);
                              }}
                            >
                              <li className="ml-16 list-[circle]">{extend}</li>
                            </button>
                          );
                        })}
                      </ul>
                    </ul>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        console.log(item.option);
                        setOpenMenu(!openMenu);
                        setText(item.option);
                        setState(item.option);
                      }}
                      className={`list-disc px-8 py-2 text-start hover:bg-primary-600 hover:text-white`}
                    >
                      <li>{item.option}</li>
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
