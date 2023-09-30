import React from "react";

function Search({ filterUpdate }) {
  // TODO: Update the input variable to use the useRef() hook
  const input = React.useRef();

  function handleChange() {
    // TODO: Update the value of the filter with the input from the textbox
    // Hint: You will need to use the "current" property of the input variable
    filterUpdate(input.current.value);
  }

  return (
    <div>
      <form>
        <i className="icon bi bi-search"></i>
        <input
          className="searchbar"
          type="text"
          placeholder="Type to Filter"
          ref={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
export default Search;
