import Filter from "@/components/Filter/Filter.tsx";
import { FILTERDATA } from "@/data/Filters.ts";

const FilterTab = () => {
  return (
    <div className="z-30 flex flex-row space-x-4">
      {FILTERDATA &&
        FILTERDATA?.map((choice) => {
          return <Filter title={choice.title} options={choice.options} />;
        })}
    </div>
  );
};

export default FilterTab;
