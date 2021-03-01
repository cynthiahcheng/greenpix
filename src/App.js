import './App.scss';
import Button from './comps/button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Greenpix</h1>

      <Button />
      
    </div>
  );
}

export default App;
