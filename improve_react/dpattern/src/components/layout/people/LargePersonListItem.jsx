export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <div className="w-1/3 shadow-lg mt-3 bg-slate-100 p-5 rounded-md ">
      <h3 className="font-semibold my-2">{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair color: {hairColor}</p>
      <h3 className="font-semibold">Hobbies:</h3>
      <ul className="list-disc list-inside">
        {hobbies.map((hobby) => (
          <li key={hobby}> {hobby} </li>
        ))}
      </ul>
    </div>
  );
};
