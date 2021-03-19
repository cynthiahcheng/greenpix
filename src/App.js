import './App.scss';
import Button from 'comps/button';
import Form from 'comps/form';
import Nav from 'comps/nav';
import UploadCard from 'comps/uploadCard';
import Login from 'pages/login';
import Home from 'pages/home';
import SignUp from 'pages/signup';
import Likes from 'comps/likes';
import PhotoCard from 'comps/photoCard';
import BioCard from 'comps/bioCard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/login">
            <Login />
          </Route>
          <Route exact path = "/signup">
            <SignUp />
          </Route>
          <Route exact path ="/upload"> 
            <UploadCard />
            </Route>
          <Route exact path = "/test">
            <h1>Welcome to Greenpix</h1>
            <Button margin="50px 0" padding="15px 30px" borderRadius="10px"/>
            <Form />
            <Likes />
            <PhotoCard />
            <BioCard/>
            <Nav />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
