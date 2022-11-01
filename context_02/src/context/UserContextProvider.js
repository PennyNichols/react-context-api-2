import { useState, useEffect, createContext, useContext } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function UserContextProvider(props) {
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeImageWidth = (id, width) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, width: width } : user))
    );
  };

  const values = {
    users,
    changeImageWidth
  }

  return <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
}

export default UserContextProvider;