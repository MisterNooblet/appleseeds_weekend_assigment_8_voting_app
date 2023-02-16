import data from "./data";
import { Login } from "./pages";

localStorage.setItem('users', JSON.stringify(data))
function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
