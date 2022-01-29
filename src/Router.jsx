import Login from './pages/Login';
import Enterprises from './pages/Enterprises';
import Products from './pages/Products';
import Map from './pages/Map';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/empresas" component={Enterprises} exact />

        <Route path="/produtos" component={Products} exact />

        <Route path="/mapa" component={Map} exact />

        <Route path="/" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
