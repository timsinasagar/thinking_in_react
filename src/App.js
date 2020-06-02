import React, { PureComponent, Suspense } from "react";
import "./App.css";
//Lazy loading
const SearchBar = React.lazy(() => import("../src/components/searchbar.jsx"));
const ProductTable = React.lazy(() =>
  import("../src/components/producttable.jsx")
);

function App() {
  return (
    <div className="App">
      <h1> Searchable Table </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <FilterableProductTable />
      </Suspense>
    </div>
  );
}

class FilterableProductTable extends PureComponent {
  //Filterable Product Table component
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  // Reverse Data flow receiver
  handleFilterTextChange(filterText) {
    this.setState({
      filter: filterText,
    });
  }

  render() {
    return (
      <>
        {/* Suspense for lazy loading. Fallback to loading when needed */}
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBar onFilterTextChange={this.handleFilterTextChange} />
          <ProductTable products={PRODUCTS} filterText={this.state.filter} />
        </Suspense>
      </>
    );
  }
}

// Hardcoded data model for static
const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

export default App;
