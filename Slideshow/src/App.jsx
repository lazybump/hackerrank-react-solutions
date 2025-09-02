import Slides from "./components/Slides";
import { SLIDES_DATA } from "./constants";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Slides slides={SLIDES_DATA} />
      </div>
    </>
  );
}

export default App;
