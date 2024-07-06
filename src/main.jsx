import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
//import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';// добавление уведомлениЯ о добавлении продукта в корзину
import 'react-toastify/dist/ReactToastify.css';// добавление уведомлениЯ о добавлении продукта в корзину
import { theme } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   
      {/* <AuthProvider> */}
      <Provider store={store}>
        <ChakraProvider theme={theme}> 
          <ToastContainer
            position="top-right"
            autoClose={3000}        
            closeOnClick
            pauseOnHover={false}
            //theme='dark'
            />
            <App />
     </ChakraProvider> 
      </Provider>
      {/* </AuthProvider> */}
  
    </BrowserRouter>
  </React.StrictMode>
)


// подключение роутинга
