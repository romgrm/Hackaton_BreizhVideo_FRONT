import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Switch>
      <Route path="/Events" component={Event} />
      <Route path="/Movies" component={Films} />
    </Switch>
    </>
  );
}

export default App;
