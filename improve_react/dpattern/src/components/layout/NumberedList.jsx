export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <div
          key={i}
          className="w-1/3 mt-3 bg-cyan-700 shadow-lg shadow-cyan-700/50 text-white p-3 rounded-lg"
        >
          <h3 className="bg-white w-4 text-black p-1 rounded-full font-bold">
            {" "}
            {i + 1}{" "}
          </h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </div>
      ))}
    </>
  );
};
