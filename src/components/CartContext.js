/*import { createContext, useState} from "react"


export const CartContext = createContext({
    items: [],
    getProcutQuantity: () => {},
    addOneToCart: () => [],
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
   const [cartProducts, setCartProducts] = useState([]);

   function getProductQuantity(id) {
    cartProducts.find
   }
   
    const contextValue = {
        items: [],
        getProductsQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFormCart,
        getTotalCost
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
