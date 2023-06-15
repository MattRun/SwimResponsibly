import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/ArtSlice"
import { Link } from "react-router-dom";
const AllProduct = ()=> {
    const dispatch = useDispatch()

    const AllProducts = useSelector((state) => {
        // console.log(state.allProducts.productList)
        return state.allArt
    })
    console.log("this is all products",AllProduct)

    useEffect(() => {
        dispatch(fetchAllProducts())
    },[])

    return (
        <div>
            
            <h1>List of All Products</h1>
            {/* {
                AllProducts.map((Product) =>{
                    return(
                        <div key={Product.id}>
                            <Link to ={`/products/${Product.id}`}>
                                <h1>{Product.name}</h1>
                                <h1>{Product.price}</h1>
                                <img className ="productThumbnail"src ={Product.imageURL}/>
                            </Link>
                               
                                {/* <button onClick={()=>purchaseProduct(Product.id)}>purchase/addToCart</button> */}
                        {/* </div>
                        )
                    }) */
                    
                    }
                 
            </div>
        )
    }


export default AllProduct