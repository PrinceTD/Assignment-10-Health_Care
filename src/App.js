import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './componets/Home/Home';
import Service from './componets/Service/Service';
import NotFound from './componets/Notfound/NotFound';
import About from './componets/About/About';
import Contact from './componets/Contact/Contact';
import SingleService from './componets/SingleService/SingleService';
import Login from './componets/LogIn/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivetRoute from './componets/LogIn/PrivetRoute';
import Register from './componets/Register/Register';
import Doctor from './componets/Doctor/Doctor';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivetRoute path='/contact'>
              <Contact></Contact>
            </PrivetRoute>
            <Route path='/doctor'>
             <Doctor></Doctor>
            </Route>
            <PrivetRoute path='/booking/:serviceId'>
              <SingleService></SingleService>
            </PrivetRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>



    </div>
  );
}

export default App;
