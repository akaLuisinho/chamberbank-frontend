import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { AuthContextProvider } from './contexts/AuthContext'

import { CreateAccount } from './pages/createAccount'
import { Login } from './pages/login'
import { Home } from './pages/home'
import { Extract } from './pages/extract'
import { Transfer } from './pages/transfer'
import { AddMoney } from './pages/addMoney'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/signup' exact component={CreateAccount} />
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/extract' exact component={Extract} />
          <Route path='/transfer' exact component={Transfer} />
          <Route path='/addMoney' exact component={AddMoney} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
