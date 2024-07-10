export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;

  return (
    <div className="bg-cyan-700 shadow-lg shadow-cyan-700/50 my-5 p-2 w-1/3 text-white rounded">
      <p>
        Name: {name}, Age: {age} years
      </p>
    </div>
  );
};
