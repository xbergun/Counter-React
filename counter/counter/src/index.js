import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import {createStore} from "redux"
import rootReducer from "./store/rootReducer";

const store = createStore(rootReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    
        <App />
      
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
