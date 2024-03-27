import React from "react";

// created a user friendly NotFound componenet that displays a 404 error page when a URL does not match an existing route.

const NotFound = () => {
     return (

        //!-- Not Found --
        <li className="not-found">
            <h3>404 Error</h3>
            <p>Sorry, the page could not be found!</p>
        </li>
     )
};

export default NotFound;