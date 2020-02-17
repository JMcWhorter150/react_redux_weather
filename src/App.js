import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import weather from './reducers';

const store = createStore(weather);

function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>

      </Provider>

    </div>
  );
}

export default App;
