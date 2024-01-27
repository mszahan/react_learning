import { useEffect, useState } from 'react';
import { getPerson } from './getPerson';

export function PersonScore() {
  // you cannot use the async await function directly within the useEffect
  // you can use async fucntion within another function
  // async function getThePerson() {
  //   const person = await getPerson();
  //   console.log(person);
  // }
  // getThePerson();

  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson().then((person) => {
      setLoading(false);
      setName(person.name);
    })
    
  }, []);

  if (loading) {
    return <div>Loading....</div>
  }

  return (
    <div className="person">
      <h3>
        {name} - score: {score}
      </h3>
      <button onClick={() => setScore(score+1)}>Add</button>
      <button onClick={() => setScore(score-1)}>Submit</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}
