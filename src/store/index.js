import allArt from "./ArtSlice"
import singleArt from "./singleArtSlice"

/* Here is where you will configure the store 
  The store needs some reducer slices!
*/ 

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    allArt: allArt,
    singleArt: singleArt,
  }
});

export default store;