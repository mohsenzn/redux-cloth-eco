import React from 'react';
import HomePAge from './pages/Homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop'
import Singin from './pages/SingIn'

import Navbar from './components/Header'

const App = () => {
  return (
    < >
    <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePAge} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={Singin} />
      </Switch>
    </>
  );
}

export default App;
