export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3 className="font-semibold mt-3">{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair color: {hairColor}</p>
      <h3 className="font-semibold">Hobbies:</h3>
      <ul className="list-disc list-inside">
        {hobbies.map((hobby) => (
          <li key={hobby}> {hobby} </li>
        ))}
      </ul>
    </>
  );
};
