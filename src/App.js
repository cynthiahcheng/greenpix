import './App.scss';
import Button from './comps/button';
import Input from './comps/input';

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

      <Button margin="50px 0" padding="15px 30px" borderRadius="10px"/>
      <Input />

    </div>
  );
}

export default App;
