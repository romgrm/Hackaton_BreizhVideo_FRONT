import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import {Switch, Route} from 'react-router-dom'
import Films from './Components/Films'
import Events from './Components/Events';
import Village from './Components/Village';
import Home from './Components/Home';


function App() {
  return (
    <>
    <Header />
    <Home />
    <Switch>
      <Route path="/Events" component={Events} />
      <Route path="/Movies" component={Films} />
      <Route path="/Places" component={Village} />
      <Route path="/" component={Home/>
    </Switch>
    </>
  );
}

export default App;
