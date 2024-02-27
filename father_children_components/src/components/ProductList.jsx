import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <ProductListItem
            key={index}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            //! 勘誤處，應新增下面這行
            discountRate={product.discountRate}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
