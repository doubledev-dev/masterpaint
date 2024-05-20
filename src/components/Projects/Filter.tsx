import type { WritableAtom } from "nanostores";

interface Props {
  open: WritableAtom<boolean>;
  title: string;
  filterOption: string[];
}

const filterOption = ["All", "Design", "Development", "Marketing", "Sales"];

function Filter (Props: Props) {
  return (
    <div className="flex flex-col text-primary-800">
    <button
      className={"flex relative z-20 items-center bg-secondary space-x-48 uppercase font-Inter p-2 px-4 border-b-4 " +
        (Props.open ? "border-primary-800" : "border-transparent")}
      ><p className="text-base">{Props.title}</p>
    </button>
    <ul className="absolute z-10 bg-white ">
      {
        filterOption.map((option, index) => (
          <li key={index} className="p-2 cursor-pointer hover:bg-primary-100">{option}</li>
        ))
      }
    </ul>
  </div>
  )
};

export default Filter;


