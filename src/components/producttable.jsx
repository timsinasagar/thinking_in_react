import React, { PureComponent } from "react";

// Lady loading
const ProductRow = React.lazy(() => import("../components/productrow.jsx"));

// This is an example of Pure Component
class ProductTable extends PureComponent {
  //Product Table component
  render() {
    const filterText = this.props.filterText;
    const products = this.props.products;

    // variable for filtered product list
    const productList = [];

    products.forEach((product) => {
      //check if the filter text match the product list
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      //push products to the list that match the filter text
      productList.push(
        <ProductRow key={product.name} product={product.name} />
      );
    });

    return (
      <>
        <p>
          <b>Product Table</b>
        </p>
        {productList}
      </>
    );
  }
}

// NOTE:
// Pure Components give a considerable increase in performance
// because number of render operation in the application which
// is a huge win for complex UI and therefore advised to use if
// possible. Also, there will be cases where you want to use the
// lifecycle methods of Component and in such cases, we cannot
// use stateless components

export default ProductTable;
