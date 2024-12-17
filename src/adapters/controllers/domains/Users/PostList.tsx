import React from "react";

import { usePostsQueries } from "@/infrastructure/hooks/usePosts";
import { Input } from "@/components/ui/input";

export const UserList: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [page, setPage] = React.useState(1);

  const { useGetAllPosts } = usePostsQueries();

  const { data: Posts, isPending } = useGetAllPosts({
    paginate: {
      page: 1,
      limit: 5,
    },
  });

  console.log("first", Posts);

  return (
    <div>
      <div>
        <h1>Posts List</h1>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <ul className="h-[70vh] overflow-y-auto">
        {Posts?.length === 0 && <p>No Posts found</p>}
        {isPending && <p>Loading...</p>}
        {Posts?.map((country) => (
          <li key={country.countryName}>
            {country.countryName}-{country.id}
          </li>
        ))}
      </ul>
      <div className="pagination flex gap-5">
        <button
          className="text-blue-500 bg-slate-200"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="text-blue-500 bg-slate-200"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
