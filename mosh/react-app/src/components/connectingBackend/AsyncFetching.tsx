import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
}

const AsyncFetching = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="json">
      <p className="mt-5">Async fetching</p>
      {error && <p className="text-danger">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncFetching;
