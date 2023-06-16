import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
// link makes it clickable ^
import HomePage from './HomePage';
import AllProduct from './AllProduct';
import {SingleProduct} from './index'

const Main = () => {
    return (
        <div>
            <nav>
                <ul className='nav1'>

                <Link to='/'><h3>HomePage</h3></Link>
                <Link to='/allproducts'><h3>Gallery</h3></Link>
                {/* aka all products^ */}
                {/* <Link to='/students'><h3>Artists</h3></Link> */}
                {/* if we want all artist and single artist to be clickable */}
                
                </ul>
            </nav>
            
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/products' element={<AllProduct/>}/>
                    <Route path='/products/:id' element={<SingleProduct/>}/>
                </Routes>
            
        </div>
    );
};

export default Main;