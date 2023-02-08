import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile";
import Car from "./Car";
import Header from "./Header";
import UserProvider from "./UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        {/* <Profile firstName="Danielle" lastName="Barker" /> */}
        <Car />
      </div>
    </UserProvider>
  );
}

export default App;
