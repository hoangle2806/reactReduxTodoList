import React, { Component } from 'react';
import './App.css';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Note from './components/note';
import NotFound from './components/notFound';

import {Provider} from 'react-redux';
import {createStore} from "redux";
import ponyApp from './reducers';

let store = createStore(ponyApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Note}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
