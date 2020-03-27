import React, { Fragment } from 'react';
import Weather from './components/Weather'

/** Redux */
import { Provider } from 'react-redux'
import store from './app/store'

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
