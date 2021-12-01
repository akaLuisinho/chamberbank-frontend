import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { AuthContextProvider } from './contexts/AuthContext'
import { PrivateRoute } from './services/privateRoute'
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
          <PrivateRoute path='/home' exact component={Home} />
          <PrivateRoute path='/extract' exact component={Extract} />
          <PrivateRoute path='/transfer' exact component={Transfer} />
          <PrivateRoute path='/addMoney' exact component={AddMoney} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
