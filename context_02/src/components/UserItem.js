import { useUserContext } from "../context/UserContextProvider";

function UsersList ({ user }) {
  const { id, login, avatar_url, width } = user;
  const { changeImageWidth } = useUserContext();

  return (
    <div>
      <h3>{login}</h3>
      <img src={avatar_url} alt="" width={width} />
      <div>
        <label htmlFor="width">Image width(px)</label>
        <input
          className="width"
          type="number"
          value={width}
          onChange={(e) => changeImageWidth(id, e.target.value)}
        />
      </div>
    </div>
  );
};

export default UsersList;
