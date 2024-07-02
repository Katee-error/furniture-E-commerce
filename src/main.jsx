import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
//import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <ChakraProvider> */}
      {/* <AuthProvider> */}
        <App />
      {/* </AuthProvider> */}
    {/* </ChakraProvider> */}
    </BrowserRouter>
  </React.StrictMode>
)


// подключение роутинга
