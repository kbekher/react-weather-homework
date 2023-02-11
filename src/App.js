import "./App.css";

import background from "./img/Bg.jpg";

import Weather from "./Weather";

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
        <Weather />
      </div>
    </div>
  );
}

export default App;
