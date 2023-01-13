import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SearchForm() {
  return (
    <div className="handyman-search">
      <input className="search-input" placeholder="Search" type="text" />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}

export default SearchForm;
