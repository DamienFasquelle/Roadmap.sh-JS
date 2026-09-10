import "./App.css";
import Card from "./Card";
import logo from "./logo.png";

function App() {
    return (
        <div className="App">
            <img src= {logo} alt="logo" className="logo" />
            <Card />
        </div>
    );
}

export default App;