export const LargeProductListItem = ({ products }) => {
  const { name, price, description, rating } = products;

  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Description: </h2>
      <p> {description} </p>
      <p>Average Rating: {rating}</p>
    </>
  );
};
