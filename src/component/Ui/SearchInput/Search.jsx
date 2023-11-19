import { useRouter } from "next/router";
import SearchIcon from "../../../assets/icon/SearchIcon.svg";
import { useState } from "react";

function Search({
  placeholder = "جست و جو  ",
  children,
  onChange,
  className,
  icon,
  onSubmit,
}) {
  const router = useRouter();
  const [query, setQuery] = useState(() => router.query.q);

  const handleSearch = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        q: query,
      },
    });
  };
  return (
    <div className={`${className} inline-block`}>
      <form
        dir="rtl"
        className="flex justify-between px-5 relative items-center bg-[#FAFAFA] rounded-xl h-[64px] w-[100%]"
        onSubmit={handleSearch}
      >
        {children}
        <input
          maxLength="1000"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent focus-visible:outline-none h-[100%] w-[100%] flex-grow p-3"
          placeholder={placeholder}
        />
        <button type="submit" onSubmit={handleSearch}>
          <img src={icon?.src} className="flex w-[100%] h-[40px]" />
        </button>
      </form>
    </div>
  );
}

export default Search;
