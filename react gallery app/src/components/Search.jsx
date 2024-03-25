import React, { useState } from "react"; 

const Search = (props) => {

//This component has a searchText that is specific to the componenet and gets update on the onChange event w/ the text the user types into the input field

const [searchText, setSearchtext] = useState('');


//This handleSubmit function is called when the form is submitted, handleSubmit is preventing the default behavior of the form 
const handleSubmit = e => {
    e.preventDefault();
    props.changeQuery(searchText); 
    e.currentTarget.reset();

}
    
    return (
        <form className="search-form" onSubmit={e => handleSubmit(e)} >
            <input type="search"
                   onChange={e => setSearchtext(e.target.value)}
                   name="search"
                   placeholder="Search for an Image"
                   required />
            <button type="submit" className="search-button">
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </button>
        </form>
    );
};

export default Search; 