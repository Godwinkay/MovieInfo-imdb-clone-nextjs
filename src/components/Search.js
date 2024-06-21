'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <div>
      <form className="w-2/3 flex justify-center gap-4 items-center mt-4 mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none border border-gray-400 p-3 bg-transparent rounded-lg w-full"
        />
        <button disabled={search === ''} type="submit" className="disabled:bg-gray-400 bg-primary p-3 rounded-lg font-bold">
          Search
        </button>
      </form>
    </div>
  );
}