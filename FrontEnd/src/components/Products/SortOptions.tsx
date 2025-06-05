import type { ChangeEvent } from "react";
import { useSearchParams } from "react-router";

const SortOptions = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchparams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-end">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="">Sort by :Default</option>
        <option value="PriceAsc">Price:Low to High</option>
        <option value="PriceDec">Price:High to Low</option>
        <option value="Popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
