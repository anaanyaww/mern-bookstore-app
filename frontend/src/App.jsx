//App.jsx defines how users navigate through your application. 
//It connects specific URLs to their corresponding page components, dynamically handles parameters for resource-specific views (like details, edit, and delete), and ensures your app's navigation is intuitive and well-structured.


//racfe
//use extension es7+
//npm i react-router-dom


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';


//Dynamic Routing (Routes with Parameters)
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App; 