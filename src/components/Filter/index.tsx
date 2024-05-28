import type { FilterData } from "@/types/Filters";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
    data: FilterData;
    setState: (e: string) => void;
}

function Filter({data, setState } : Props) {

    const [text, setText] = useState<string>(data.title)
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    return (
        <div className="flex flex-col justify-start">
            <button onClick={()=>setOpenMenu(!openMenu)} className={"px-4 py-1 bg-secondary-100 items-center flex justify-between w-[312px] space-x-32 border-b-2 " + (openMenu ? "  border-primary-800" : " border-transparent")}>
                <h3 className="text-base font-semibold">{text}</h3>
                <ChevronDown size={20} className={openMenu ? "rotate-180 duration-300" : "duration-300"} />
            </button>
            {
                openMenu && (
                    <div className="space-x-4 inline-block relative">
                {
                    <div className="absolute block bg-white z-40 w-full ">
                        <ul className="flex flex-col ">
                        {data.options.map((item, index) => {
                        return (
                            item.extends ? (
                                <ul className="w-full flex flex-col">
                                    <button
                                    key={`${data.title}-${index}`}
                                    onClick={()=> {
                                        console.log(item.option)
                                        setOpenMenu(!openMenu)
                                        setText(item.option)
                                        setState(item.option)
                                    }}
                                    className={`px-8 py-2 list-disc text-start hover:bg-primary-600 hover:text-white`}
                                >
                                    <li>{item.option}</li>
                                </button>
                                <ul className="grid grid-cols-1">
                                    {
                                        item.extends.map((extend, index) => {
                                            return (
                                                <button key={index} 
                                                className="p-2 bg-white text-start hover:bg-primary-600 hover:text-white"
                                                onClick={()=>{
                                                    setOpenMenu(!openMenu)
                                                    setText("ทา" + extend)
                                                    setState("ทา" + extend)
                                                }
                                                }><li className="list-[circle] ml-16">{extend}</li></button>
                                            )
                                        })
                                    }
                                </ul>    
                                </ul>
                            ) : (
                                    <button
                                    key={index}
                                    onClick={()=> {
                                        console.log(item.option)
                                        setOpenMenu(!openMenu)
                                        setText(item.option)
                                        setState(item.option)
                                    }}
                                    className={`px-8 py-2 list-disc text-start hover:bg-primary-600 hover:text-white`}
                                >
                                    <li>{item.option}</li>
                                </button>
                                )
                        )
                    })}
                        </ul>
                    </div>
                }
            </div>
                )
            }
        </div>
    );
}


export default Filter;