import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import {Switch, Route} from 'react-router-dom'
import Films from './Components/Films'
import Events from './Components/Events';


function App() {
  return (
    <>
    <Switch>
      <Route path="/Events" component={Events} />
      <Route path="/Movies" component={Films} />
      <Route path="/Places" component={Villa} />
    </Switch>
    </>
  );
}

export default App;
