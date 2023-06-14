
import { configureStore } from "@reduxjs/toolkit";
import allProductSlices from "./slices/allProductSlices";
import singleProductSlices from "./slices/singleProductSlices";


const store = configureStore({
    reduceer: {
        //all my slices
        allProduct: allProductSlices,
        singleProduct: singleProductSlices,
    }
});

export default store;