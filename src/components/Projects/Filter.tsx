import type { WritableAtom } from "nanostores";

interface Props {
  open: WritableAtom<boolean>;
  title: string;
  filterOption: string[];
}

const filterOption = ["All", "Design", "Development", "Marketing", "Sales"];

function Filter(Props: Props) {
  return (
    <div className="flex flex-col text-primary-800">
      <button
        className={
          "relative z-20 flex items-center space-x-48 border-b-4 bg-secondary p-2 px-4 font-Inter uppercase " +
          (Props.open ? "border-primary-800" : "border-transparent")
        }
      >
        <p className="text-base">{Props.title}</p>
      </button>
      <ul className="absolute z-10 bg-white ">
        {filterOption.map((option, index) => (
          <li key={index} className="cursor-pointer p-2 hover:bg-primary-100">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
