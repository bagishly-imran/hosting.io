import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Index from './pages/index';
import Packages from './pages/packages';
import Help from './pages/help';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Forgot from './pages/forgot';
import NotFound from './pages/notFound';
import './Sass/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>

          <Navbar/>
          
          <Switch>
            <Route exact path = "/hosting.io" component = {Index}/>  
            <Route path = '/packages' component = {Packages}/>
            <Route path = '/help' component = {Help}/>
            <Route path = '/contact' component = {Contact}/>
            <Route path = '/login' component = {Login}/>
            <Route path = '/register' component = {Register}/>
            <Route path = '/forgot' component = {Forgot}/>
            <Route exact component = {NotFound}/>
          </Switch>


          <Footer/>

        </Router>
    </div>
  );
}

export default App;
