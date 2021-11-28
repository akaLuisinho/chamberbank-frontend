import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { CreateAccount } from './pages/createAccount'
import { Login } from './pages/login'
import { Home } from './pages/home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' exact component={CreateAccount} />
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
