import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
//mport { ChakraProvider } from '@chakra-ui/react';
//import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';// добавление уведомлениЯ о добавлении продукта в корзину
import 'react-toastify/dist/ReactToastify.css';// добавление уведомлениЯ о добавлении продукта в корзину

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <ChakraProvider> */}
      {/* <AuthProvider> */}
      <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={3000}        
        closeOnClick
        pauseOnHover
        //theme='dark'
        />
      <ToastContainer />
         <App />
      </Provider>
      {/* </AuthProvider> */}
    {/* </ChakraProvider> */}
    </BrowserRouter>
  </React.StrictMode>
)


// подключение роутинга
