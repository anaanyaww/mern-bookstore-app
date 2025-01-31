//It serves as the starting point where your React application is bootstrapped.

/*

It serves as the starting point where your React application is bootstrapped.
It renders the React component tree into the root DOM element (#root) in your index.html file.
It wraps your application (App component) with global context providers and utilities to enable functionalities across your entire app.

Why is it Useful?
Centralized Configuration: It allows you to configure global providers like routing (BrowserRouter) and notifications (SnackbarProvider) in one place.
Scalability: Additional wrappers (e.g., for state management like Redux or Context API) can be added easily as your app grows.
Single Entry Point: It keeps the entry point simple and organized while bootstrapping your app.


*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);


//A wrapper from the notistack library that provides snackbar notifications for your app. 
//It manages notification display (e.g., success, error messages) globally.