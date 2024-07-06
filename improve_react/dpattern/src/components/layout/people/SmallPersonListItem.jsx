export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;

  return (
    <div>
      <p>
        Name: {name}, Age: {age} years
      </p>
    </div>
  );
};
