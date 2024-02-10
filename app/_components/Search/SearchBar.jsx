"use client";
import React, { useState, useEffect, useTransition } from "react";
import SearchDropDown from "./SearchDropDown";
import { searcheverything } from "@/lib/actions/search.actions";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ scrollDirection }) => {
  const [expanded, setExpanded] = useState(false);
  const [searchtext, setSearchtext] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [searchResultExist, setSearchResultExist] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading
  const [_, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      if (searchtext.trim().length > 1) {
        try {
          setLoading(true); // Set loading to true when starting the search
          const result = await searcheverything(searchtext);
          console.log(result);
          setSearchResult(result);
          setSearchResultExist(true);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setLoading(false); // Set loading to false when the search is done
        }
      } else {
        setSearchResult({});
        setSearchResultExist(false);
      }
      if (searchtext.trim().length !== 0) {
        setSearchResultExist(true);
      }
    };

    startTransition(() => {
      fetchData();
    });
  }, [searchtext, startTransition]);

  const handleSearchIconClick = () => {
    setExpanded(!expanded);
    setSearchResultExist(false);
  };

  const handleInputBlur = () => {
    const blurTimeout = setTimeout(() => {
      setSearchResultExist(false);
    }, 300);
  };

  const handleInputFocus = () => {
    if (searchtext.trim() !== "") {
      setSearchResultExist(true);
    }
  };

  useEffect(() => {
    if (scrollDirection !== "up") {
      setSearchResultExist(false);
    }
  }, [scrollDirection]);

  return (
    <>
      {searchResultExist && <SearchDropDown searchResult={searchResult} />}
      <div
        className={`${
          expanded ? "w-full" : "w-12"
        } relative flex h-12 items-center overflow-hidden rounded-md bg-gray-100 shadow transition-all duration-300 ease-in-out focus-within:shadow-md max-sm:bg-gray-200`}
      >
        <div
          className="grid h-full w-14 cursor-pointer place-items-center text-gray-600"
          onClick={handleSearchIconClick}
        >
          <FaSearch />
        </div>

        <input
          className={`peer h-full ${
            expanded ? "w-full pl-1" : "w-0"
          } border-none bg-gray-100 text-sm text-black outline-none transition-all duration-300 ease-in-out`}
          type="text"
          id="search"
          name="search"
          placeholder="Search something.."
          onChange={(e) => {
            startTransition(() => {
              setSearchtext(e.target.value);
            });
          }}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
        />
      </div>
    </>
  );
};

export default SearchBar;
