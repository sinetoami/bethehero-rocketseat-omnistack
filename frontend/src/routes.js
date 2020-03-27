import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
  return (
    <BrowserRouter> {/* necessário sempre */}
      <Switch> {/* garante que seja chamada apenas uma rota por vez */}
        {/* o react-router-dom não verifica se as rotas são exatamente iguais */}
        {/* as que tem no path. Ele verifica apenas se COMEÇA com o */}
        {/* que foi passado no path. Assim caso não utilize o atributo 'exact' */}
        {/* o React irá sempre retornar para a rota raiz */}
        <Route path="/" exact component={Logon}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/incidents/new" component={NewIncident}></Route>
      </Switch>
    </BrowserRouter>
  );
};
