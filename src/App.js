import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import background from "./img/Bg.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
      className="App"
    >
      <div className="container">
        <Search />
        <Weather />
      </div>
    </div>
  );
}

export default App;
