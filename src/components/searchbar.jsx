import React from "react";

//Example of Stateless Component
export default function SearchBar(props) {
  // Handle filter text change
  function handleFilterTextChange(e) {
    //Reverse flow: sending data to parent
    props.onFilterTextChange(e.target.value);
  }

  return (
    <h1>
      <p>Search Bar</p>
      <input type="text" onChange={handleFilterTextChange} />
    </h1>
  );
}
// NOTE:
// Pure Components give a considerable increase in performance
// because number of render operation in the application which
// is a huge win for complex UI and therefore advised to use if
// possible. Also, there will be cases where you want to use the
// lifecycle methods of Component and in such cases, we cannot
// use stateless components

// Stateless Components are easy and fast to implement. They are good
// for very small view where re-render cost won't matter that much.
// They provide cleaner code and less number of files to deal with.
