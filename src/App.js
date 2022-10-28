import "./App.css";
import ProfilePhoto from "./component/ProfilePhoto";
import FullName from "./component/FullName";
import Address from "./component/Address";
import photo from "./marwa.jpg";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <img src={photo} className="marwa" alt="marwa" />
        <FullName />
        <Address />
        <ProfilePhoto />
      </header>
    </div>
  );
}

export default App;