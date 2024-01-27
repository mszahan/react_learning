import { useEffect, useReducer, useRef, useMemo } from 'react';
import { getPerson } from './getPerson';


function sillyExpensive() {
  console.log('Executing silly function');
  let sum = 0;
  for (let i =0; i < 1000; i++) {
    sum +=i;
  }
  return sum;
}


type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action = 
  | {
    type: 'initialize';
    name: string;
  }

  | {
    type: 'increment';
  }

  |{
    type: 'decrement';
  }
  
  | {
    type: 'reset';
  };


function reducer (state: State, action : Action): State {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score:0, loading: false}
    case 'increment':
      return {...state, score: state.score +1};
    case 'decrement':
      return {...state, score: state.score -1};
    case 'reset':
      return {...state, score:0};
    default:
      return state;
  }
  
}



export function PersonScore() {
  // you cannot use the async await function directly within the useEffect
  // you can use async fucntion within another function
  // async function getThePerson() {
  //   const person = await getPerson();
  //   console.log(person);
  // }
  // getThePerson();

  // const [name, setName] = useState <string | undefined> ();
  // const [score, setScore] = useState(0);
  // const [loading, setLoading] = useState(true);

  const [{name, score, loading}, dispatch] = useReducer(
    reducer,
    {
      name:undefined,
      score: 0,
      loading: true,
    }
  )

  const addButtonRef = useRef <HTMLButtonElement> (null);


  useEffect(() => {
    getPerson().then(({name}) => {
      dispatch({type: 'initialize', name})
      addButtonRef.current?.focus();
    })
    
  }, []);

  useEffect (() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading])

  const expensiveCalculation = useMemo(
    () => sillyExpensive(),
    []
  );

  if (loading) {
    return <div>Loading....</div>
  }

  return (
    <div className="person">
      <h3>
        {name} - score: {score}
      </h3>
      <p>{expensiveCalculation}</p>
      <button ref={addButtonRef} onClick={() => dispatch({type: 'increment'})}>Add</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Subtract</button>
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  );
}
