import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style';
import store from './store';
import Home from './pages/home';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Home></Home>
    </Provider>
  );
}

export default App;
