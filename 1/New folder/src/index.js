import React from 'react';
import  ReactDOM  from 'react-dom';

    // import '../node_modules/bootstrap/dist/css/bootstrap.css'
    // import '../node_modules/@fortawesome/fontawesome-free/css/all.css'


// import Product from './product';
//import ShoppingCart from './components/shoppingCart';
import App from './src/comp/app';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.querySelector("#root")
    )