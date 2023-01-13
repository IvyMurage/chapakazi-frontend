import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SearchForm.css"

function SearchForm() {
  return (
    <div className="handyman-search">
      <input className="search-input" placeholder="Search" type="text" />
      <FontAwesomeIcon icon={faSearch} className="search-btn"/>
    </div>
  );
}

export default SearchForm;
