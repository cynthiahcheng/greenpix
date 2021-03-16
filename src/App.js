import './App.scss';
import Button from 'comps/button';
import Form from 'comps/form';
import Nav from 'comps/nav';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BioCard from 'comps/bioCard';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Greenpix</h1>

      <Button margin="50px 0" padding="15px 30px" borderRadius="10px"/>
      <Form />
      <BioCard/>
      <Nav />

    </div>
  );
}

export default App;
