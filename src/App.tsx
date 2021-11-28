import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Login } from './pages/login'
import { Home} from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} />
        <Route path='/home' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
