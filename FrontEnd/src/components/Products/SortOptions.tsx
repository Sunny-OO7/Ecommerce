import { useSearchParams } from "react-router";

const SortOptions = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBY", sortBy);
    setSearchparams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="">Default</option>
        <option value="PriceAsc">Price:Low to High</option>
        <option value="PriceDec">Price:High to Low</option>
        <option value="Pop">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
