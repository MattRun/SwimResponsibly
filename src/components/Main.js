import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import AllProduct from './AllProduct';


const Main = () => {
    return (
        <div>
            <nav>
                <ul className='nav1'>

                <Link to='/'><h3>HomePage</h3></Link>
                <Link to='/shop'><h3>Gallery</h3></Link>
                
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