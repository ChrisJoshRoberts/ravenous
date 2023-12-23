import React, {useState} from "react";
import './searchBar.css' ;

const filter = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

const SearchBar = () => {
    return (
        <div className="outer-wrapper">
            <div className="search-container"> 
                <input className="search" placeholder="Search businesses" />
                <input className="search" placeholder="Where" />
                <button>Let's Go</button>
            </div>
        <div className="filter">
            <div className="filter-btn">Best Match</div>
            <div className="filter-btn">Highest Rated</div>
            <div className="filter-btn">Most Viewed</div>
        </div>
        
        </div>
    )
};
export default SearchBar;