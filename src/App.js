import { Switch, Route } from 'react-router-dom'
import './App.css';
import Hompage from './page/homepage/homepage.component';





const HatsPage = () => (
  <div>
      <h1>HATS PAGE</h1>
  </div>
);




function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={Hompage} />
      <Route  path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
