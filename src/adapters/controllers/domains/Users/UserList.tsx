import React from "react";

import { useCountriesQueries } from "@/infrastructure/hooks/useCountries";
import { Input } from "@/components/ui/input";

export const UserList: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [page, setPage] = React.useState(1);

  const { useGetAllCountries } = useCountriesQueries();

  const { data: countries, isPending } = useGetAllCountries({
    paginate: {
      page: 1,
      limit: 5,
    },
  });

  console.log("first", countries);

  return (
    <div>
      <div>
        <h1>Countries List</h1>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <ul className="h-[70vh] overflow-y-auto">
        {countries?.length === 0 && <p>No countries found</p>}
        {isPending && <p>Loading...</p>}
        {countries?.map((country) => (
          <li key={country.countryName}>
            {country.countryName}-{country.id}
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};
