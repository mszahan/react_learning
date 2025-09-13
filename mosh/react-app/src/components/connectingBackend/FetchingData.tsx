import userService, { type User } from "../../services/user-service";
import useUsers from "../../hooks/useUsers";

const FetchingData = () => {
  const { users, error, loading, setUsers, setError } = useUsers();
  const addUser = () => {
    const newUser = { id: 0, name: "Zahan" };
    const originalUsers = [...users];
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <div className="json">
      <p className="mt-5">fetching data from json placeholder</p>
      {loading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add user
      </button>

      <ul className="list-group w-50">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.id} - {user.name}
            <div>
              <button
                onClick={() => updateUser(user)}
                className="btn btn-outline-secondary mx-2"
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingData;
