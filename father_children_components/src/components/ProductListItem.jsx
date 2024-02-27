const ProductListItem = (props) => {
  const { title, price, discountRate, imageUrl } = props;

  console.log({ ...props });

  console.log(discountRate);

  return (
    <div>
      <h2>{title}</h2>
      <p>價格：{price}</p>
      {Boolean(discountRate) && <p>折扣價：{price * discountRate}</p>}
      <p>圖片網址：{imageUrl}</p>
    </div>
  );
};

export default ProductListItem;
