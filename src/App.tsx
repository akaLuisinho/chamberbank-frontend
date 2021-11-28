import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { CreateAccount } from './pages/createAccount'
import { Login } from './pages/login'
import { Home } from './pages/home'
import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/signup' exact component={CreateAccount} />
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
