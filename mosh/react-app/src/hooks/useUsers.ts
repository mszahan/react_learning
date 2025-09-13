import { useEffect, useState } from "react";
import type { User } from "../services/user-service";
import userService from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
      useEffect(() => {
        setLoading(true);
        const { request, cancel } = userService.getAll<User>();
        request
          .then((res) => {
            setUsers(res.data);
            setLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
          });
        return () => cancel();
        //you could just do this but strict mode doesn't support here
        // .finally(()=> setLoading(false))
      }, []);
      return {users, error, loading, setUsers, setError}
}

export default useUsers;