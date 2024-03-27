import React from "react"; 

// If no matches are found by the search, display a friendly user message to tell the user there are no matches.

const NoMatches = () => {
   
    return (
        //!-- Not Found --
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>That search did not return any results. Please try again.</p>
        </li>
    );

}

export default NoMatches; 