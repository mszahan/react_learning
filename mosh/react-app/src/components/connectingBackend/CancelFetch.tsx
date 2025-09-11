import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../../services/api-client";

interface User {
  id: number;
  name: string;
}

const CancelFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // when user navigating away from this page it will abort the fetch
    const controller = new AbortController();
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // this is where you return the clean up function that undo what you do in the useEffect body
    return () => controller.abort();
  }, []);
  return (
    <div className="json">
      <p className="mt-5">fetching data from json placeholder</p>
      {error && <p className="text-danger">{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CancelFetch;
