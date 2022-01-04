import './App.css';
import Manatee from './components/Manatee/Manatee';
import Whale from './components/Whale/Whale';
import Narwhal from './components/Narwhal/Narwhal';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'; 

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/manatee'>Manatee</Link></li>
          <li><Link to='/narwhal'>Narwhal</Link></li>
          <li><Link to='/whale'>Whale</Link></li>
          <li><Link to='/whale/beluga'>Beluga Whale</Link></li>
          <li><Link to='/whale/blue'>Blue Whale</Link></li>
        </ul>
      </nav>
       <Switch>
          <Route path='/manatee'>
            <Manatee />
          </Route>
          <Route path='/narwhal'>
            <Narwhal />
          </Route>
          <Route path='/whale' >
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
