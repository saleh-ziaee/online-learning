import React, { useEffect, useState } from "react";
import Header from "@/component/Layout/Header/Header.jsx";
import Cards from "@/component/Cards/Cards.jsx";
import { apiSearchPost } from "@/api/search.js";
import Footer from "@/component/Layout/footer/Footer.jsx";
import { useRouter } from "next/router";

function Search(props) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  // const [searchParams] = useSearchParams();
  const [click, SetClick] = useState(false);
  const [query, setQuery] = useState(() => router.query.q);
  // const handleClick = () => {
  //     SetClick(true);
  // };
  //
  return (
    <div className={"w-[85%] mx-auto"}>
      <Header />
      <Cards className={"mt-[120px]"} />
      <Footer />
    </div>
  );
}

export default Search;
