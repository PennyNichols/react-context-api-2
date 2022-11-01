import UserItem from "./UserItem";
import { useUserContext } from '../context/UserContextProvider';

function UsersList () {
  const { users } = useUserContext();

  return (
    <div>
      <h2>Users List </h2>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
