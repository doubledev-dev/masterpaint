import type { FilterData } from "@/types/Filters";
import { useState } from "react";

interface Props {
    data: FilterData;
    setState: (e: string) => void;
}

function Filter({data, setState } : Props) {

    const [text, setText] = useState<string>(data.title)

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">{text}</h3>
            <div className="flex space-x-4">
                {
                    data.options.map((item, index) => {
                        return (
                            item.extends ? (
                                <div>
                                    <button
                                    key={`${data.title}-${index}`}
                                    onClick={()=> {
                                        setText(item.option)
                                        setState(item.option)
                                    }}
                                    className={`px-4 py-2 rounded-md`} 
                                >
                                    {item.option}
                                </button>
                                <ul>
                                    {
                                        item.extends.map((extend, index) => {
                                            return (
                                                <button key={index} 
                                                className="p-4 bg-white hover:bg-primary-600 hover:text-white"
                                                onClick={()=>{
                                                    setText("ทา" + extend)
                                                    setState("ทา" + extend)
                                                }
                                                }>{extend}</button>
                                            )
                                        })
                                    }
                                </ul>    
                                </div>
                            ) : (
                                    <button
                                    key={index}
                                    onClick={()=> {
                                        setText(item.option)
                                        setState(item.option)
                                    }}
                                    className={`px-4 py-2 rounded-md`}
                                >
                                    {item.option}
                                </button>
                                )
                        )
                    })
                }
            </div>
        </div>
    );
}


export default Filter;