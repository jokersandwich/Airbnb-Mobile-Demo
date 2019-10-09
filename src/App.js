import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from './style';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import List from './pages/list';
import Personal from './pages/personal';
import Wish from './pages/wish';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path='/list' exact component={List}></Route>
        <Route path='/personal' exact component={Personal}></Route>
        <Route path='/wish' exact component={Wish}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
