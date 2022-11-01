import UsersList from "./components/UsersList";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div>
      <h1>CONTEXT API EXAMPLE!</h1>
      <UserContextProvider>
        <UsersList />
      </UserContextProvider>
    </div>
  );
}
export default App;
