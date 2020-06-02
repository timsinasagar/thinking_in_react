import React, { PureComponent } from "react";

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);

    // Function binding
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    //Reverse flow: sending data to parent
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <h1>
        <p>Search Bar</p>
        <input type="text" onChange={this.handleFilterTextChange} />
      </h1>
    );
  }
}

export default SearchBar;
