import React, { PureComponent } from "react";

// Lady loading
const ProductRow = React.lazy(() => import("../components/productrow.jsx"));

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

export default ProductTable;
