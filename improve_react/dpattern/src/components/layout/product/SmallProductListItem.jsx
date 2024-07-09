export const SmallProductListItems = ({ product }) => {
  const { name, price } = product;
  return (
    <>
      <h2>
        {name} - {price}
      </h2>
    </>
  );
};
