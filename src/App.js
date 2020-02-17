import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import weather from './reducers';
import WeatherApp from './containers/WeatherAppContainer';

const store = createStore(weather);
window.store = store;

function App() {
  return (
    <div className="App App-header">
      <Provider store={store}>
        <WeatherApp />
      </Provider>
    </div>
  );
}

export default App;
