import './App.scss';
import Button from 'comps/button';
import Form from 'comps/form';
import Nav from 'comps/nav';
import UploadCard from 'comps/uploadCard';
import Login from 'pages/login';
import Home from 'pages/home';
import Landing from 'pages/landing';
import SignUp from 'pages/signup';
import Profile from 'pages/profile';
import Likes from 'comps/likes';
import PhotoCard from 'comps/photoCard';
import BioCard from 'comps/bioCard';
import Upload from 'pages/upload';
import PhotoSelected from 'pages/photoSelected';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from 'pages/profile';

import axios from 'axios';
const token = sessionStorage.getItem ("token");
// console.log("token", token);
if (token){
    axios.defaults.headers.common['Authorization'] = token;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <Landing />
          </Route>
          <Route exact path = "/login">
            <Login />
          </Route>
          <Route exact path = "/signup">
            <SignUp />
          </Route>
          <Route exact path = "/home">
            <Home />
          </Route>
          <Route exact path ="/profile"> 
            <Profile />
          </Route>
          <Route exact path ="/upload"> 
            <Upload />
          </Route>
          <Route path ="/selected/:id"> 
            <PhotoSelected />
          </Route>
          <Route exact path = "/test">
            <h1>Welcome to Greenpix</h1>
            <Button margin="50px 0" padding="15px 30px" borderRadius="10px"/>
            <Form />
            <Likes />
            <UploadCard />
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
