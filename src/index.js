import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from 'redux/store';
// import { myAction } from 'redux/actions';
// import reportWebVitals from './reportWebVitals';
import 'modern-normalize/modern-normalize.css';

// console.log(store);
// console.log(store.getState());

// store.dispatch(myAction(5));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
